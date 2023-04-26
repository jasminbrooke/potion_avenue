import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const ManageAccount = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = () => {
    }

    return (
        <div>
            <header>My profile</header>
            <Box>
                <Container maxWidth="sm">
                    <form onSubmit={(e) => handleSubmit()}>
                        <TextField 
                            onChange={(e) => setName(e.target.value)}
                            id="standard-basic" 
                            label="Display Name" 
                            variant="standard" 
                            />
                        <TextField 
                            onChange={(e) => setUsername(e.target.value)}
                            id="standard-basic" 
                            label="Username" 
                            variant="standard" 
                            />
                    </form>
                </Container>
            </Box>
        </div>
    )
}

export default ManageAccount