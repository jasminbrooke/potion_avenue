import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const CreateNewPotion = () => {

const [name, setName] = useState('')
const [image, setImage] = useState()
const [price, setPrice] = useState(10)
const [description, setDescription] = useState("A questionable potion with unknown effects...")
const [materials, setMaterials] = useState([])

const [newPotion, setNewPotion] = useState({
    name: name,
    image: image,
    price: price,
    description: description,
    materials: materials

})

const handleSubmit = () => {

}
return (

<div>
    <header>Create New Potion</header>

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
</div>

)}

export default CreateNewPotion