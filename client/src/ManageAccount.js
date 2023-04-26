import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux'
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Dispatch } from "react";

const ManageAccount = () => {
    const user = useSelector(state => state.LoginReducer.currentUser)

    const [displayname, setDisplayname] = useState('')
    const [username, setUsername] = useState('')
    const [storename, setStorename] = useState('')
    
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            displayname: displayname,
            username: username,
            storename: storename
        })
    })
    .then(response => response.json())
    // .then((updatedUser) => {
    //     dispatch({ type: "UPDATE_USER_SUCCESS", payload: updatedUser });
    //   })
    //   .catch((error) => console.error(error));
  }

    return (
        <div>
            <header>My profile</header>
            <p>{user.displayname} ({user.username}) {user.storename}</p>
            <Box>
                <Container maxWidth="sm">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <TextField 
                            onChange={(e) => setDisplayname(e.target.value)}
                            label="Display Name" 
                            variant="standard" 
                            />
                        <TextField 
                            onChange={(e) => setUsername(e.target.value)} 
                            label="Username" 
                            variant="standard" 
                            />
                        <TextField 
                            onChange={(e) => setStorename(e.target.value)} 
                            label="Storename" 
                            variant="standard" 
                        />
                    </form>
                    <Button type='submit'>Update Changes</Button>
                </Container>
            </Box>
        </div>
    )
}

export default ManageAccount