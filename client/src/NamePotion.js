import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const NamePotion = ( { handleSubmit } ) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState("A questionable potion with unknown effects...")
    const [image, setImage] = useState('http://www.clipartbest.com/cliparts/eTM/yMq/eTMyMqxAc.png')
    
    const newPotion={
        name: name,
        image: image,
        description: description
    }  


 return (
        <div>
            <header>Create New Potion</header>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> 
            <form onSubmit={(e) => handleSubmit(newPotion)}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextField 
            onChange={(e) => setName(e.target.value)}
            id="standard-basic" 
            label="Potion Name" 
            variant="standard" 
            sx={{ flex: 1, mr: 2 }}
            />
            
        
            <TextField 
            onChange={(e) => setDescription(e.target.value)}
            id="standard-basic" 
            label="Potion Description" 
            variant="standard" 
            sx={{ flex: 1}}
            />
                </Box>

                <Button type="submit">Brew Potion</Button>
            </form>
        
            </Box>
        </div>

            )}

export default NamePotion
