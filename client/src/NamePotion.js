import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'

const NamePotion = ( { handleSubmit, potionErrors } ) => {
    const user_id = useSelector(state => state.LoginReducer.currentUser.id)
    const [name, setName] = useState('')
    const [description, setDescription] = useState("A questionable potion with unknown effects...")

    // const [image, setImage] = useState('http://www.clipartbest.com/cliparts/eTM/yMq/eTMyMqxAc.png')
    
    const newPotion={
        name,
        // image: image,
        description,
        user_id: user_id
    }  



    const handleClick = (e, newPotion) => {
        handleSubmit(e, newPotion)
    }


 return (
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> 
                <form onSubmit={(e) => handleClick(e, newPotion)}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField
                            error={potionErrors.name?.[0]}
                            helperText={potionErrors.name?.[0]}
                            onChange={(e) => setName(e.target.value)}
                            label="Potion Name" 
                            variant="standard" 
                            sx={{ flex: 1, mr: 2 }}
                        />
                        
                        <TextField 
                            onChange={(e) => setDescription(e.target.value)}
                            label="Potion Description" 
                            variant="standard" 
                            sx={{ flex: 1}}
                        />
                    </Box>
                    <Button 
                    id="gooey-button" 
                    type="submit"> Brew Potion
                    </Button>
                </form>
            </Box>
    )}

export default NamePotion
