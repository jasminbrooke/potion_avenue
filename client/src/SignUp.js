import React, { useState } from "react"
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const SignUp = ({ handleLogin }) => {
    const [displayname, setDisplayname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordconfirmation, setPasswordconfirmation] = useState('');
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                displayname: displayname,
                username: username,
                password: password,
                password_confirmation: passwordconfirmation
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                handleLogin(data)
            }
        })
      }

    return (
        <div>
        <Typography variant="h4">Create an Account</Typography>

        <Box>
                <Container maxWidth="sm">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <TextField 
                            onChange={(e) => setDisplayname(e.target.value)}
                            id="standard-basic" 
                            label="Display Name" 
                            variant="standard" />
                        <TextField 
                            onChange={(e) => setUsername(e.target.value)}
                            id="standard-basic" 
                            label="Username" 
                            variant="standard" />
                        <TextField 
                            onChange={(e) => setPassword(e.target.value)}
                            id="standard-basic" 
                            label="Password"
                            type="password" 
                            variant="standard" />
                        <TextField 
                            onChange={(e) => setPasswordconfirmation(e.target.value)}
                            id="standard-basic" 
                            label="Password Confirmation" 
                            type="password"
                            variant="standard" />
                        <Button type='submit'> Create Account </Button>
                    </form>
                    {errors.map((error, i) => <Typography key={i}>{ error }</Typography>)}
                </Container>
        </Box>
    </div>
    )
}

export default SignUp