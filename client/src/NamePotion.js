import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'

const NamePotion = ( { handleSubmit } ) => {
    const materialArray = useSelector(state => state.MaterialReducer.materials)
    const user_id = useSelector(state => state.LoginReducer.currentUser.id)
    const [name, setName] = useState('')
    const [description, setDescription] = useState("A questionable potion with unknown effects...")
    // const [image, setImage] = useState('http://www.clipartbest.com/cliparts/eTM/yMq/eTMyMqxAc.png')

    
    const newPotion={
        name,
        // image: image,
        description,
        material_ids: materialArray.map(material => material.id),
        user_id: user_id
    }  

    const handleClick = () => {
        console.log(materialArray)
        console.log(user_id)
    }

 return (
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> 
                <form onSubmit={(e) => handleSubmit(e, newPotion)}>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField 
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
                    <Button onClick={() => handleClick()}>XXX</Button>
                    <Button type="submit">Brew Potion</Button>
                </form>
            </Box>
    )}

export default NamePotion
