import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MixMaterials from "./MixMaterials";
import Stepper from "./Stepper"

const NamePotion = ( { materials } ) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState()
    const [price, setPrice] = useState(10)
    const [description, setDescription] = useState("A questionable potion with unknown effects...")
    
    const [newPotion, setNewPotion] = useState({
        name: name,
        image: image,
        price: price,
        description: description,
        // materials: materials
    
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

 return (
        <div>
            <header>Create New Potion</header>
            <Box>
            <form onSubmit={(e) => handleSubmit(newPotion)}>
            <TextField 
            onChange={(e) => setName(e.target.value)}
            id="standard-basic" 
            label="Potion Name" 
            variant="standard" />
            
        
            <TextField 
            onChange={(e) => setDescription(e.target.value)}
            id="standard-basic" 
            label="Potion Description" 
            variant="standard" />
            
            </form>
        
            </Box>
        </div>

            )}

export default NamePotion
