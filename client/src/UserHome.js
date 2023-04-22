import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const UserHome = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = () => {

    }

    return (
        <div>
            <header>This is the User Homepage</header>


            <p>

                Here you can:

                edit your account
                delete your account
                
            </p>



    <Box>
    <CssBaseline />
      <Container maxWidth="sm">
            <form onSubmit={(e) => handleSubmit()}>
                <TextField 
                    onChange={(e) => setName(e.target.value)}
                    id="standard-basic" 
                    label="Display Name" 
                    variant="standard" />
    

                <TextField 
                    onChange={(e) => setUsername(e.target.value)}
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" />
                </form>
        </Container>
        <CssBaseline />

    </Box>
    {/* <MixMaterials materials={materials}/> */}




        </div>
    )
}

export default UserHome