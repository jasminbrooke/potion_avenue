import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from "./actions/LoginActions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const ManageAccount = () => {
    const user = useSelector(state => state.LoginReducer.currentUser)
    const dispatch = useDispatch();

    const [displayname, setDisplayname] = useState(user.displayname)
    const [username, setUsername] = useState(user.username)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            displayname: displayname,
            username: username
        })
    })
    .then(response => response.json())
    .then((updatedUser) => {
        dispatch(setCurrentUser(updatedUser));
      })
      .catch((error) => console.error(error));
  }

    return (
        <div id="manage-account">
            <h2>Welcome to Potion Avenue, {user.displayname} !</h2>
            <p>{user.displayname} ({user.username})</p>
            <Box>
                <Container maxWidth="sm">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <TextField
                            defaultValue={displayname}
                            onChange={(e) => setDisplayname(e.target.value)}
                            label="Display Name"
                            variant="standard" 
                            />
                        <TextField 
                            defaultValue={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            label="Username" 
                            variant="standard" 
                            />
                        {/* <TextField
                            defaultValue={storename}
                            onChange={(e) => setStorename(e.target.value)} 
                            label="Storename" 
                            variant="standard" 
                        /> */}
                        <Button type='submit'>Update Changes<HistoryEduIcon></HistoryEduIcon></Button>
                        
                    </form>
                </Container>
            </Box>
        </div>
    )
}

export default ManageAccount