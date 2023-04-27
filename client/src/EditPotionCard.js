import React, { useState } from "react"
import Card from '@mui/material/Card';
import { Button, CardActionArea, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux'

const EditPotionCard = ( { potion, handleEditPotion } ) => {
    const user = useSelector(state => state.LoginReducer.currentUser)
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const potionUpdate = { 
        name: name, 
        description: description}

        const handleDeletePotion = () => {
            console.log(potion);
            fetch(`/users/${user.id}/potions/${potion.id}`,{
                method: 'DELETE'
              })}

    const handleClick = () => {
        setEditMode(!editMode)
        console.log(potion)
    }

    const handleSubmit = () => {
        handleEditPotion(potionUpdate)
    }

    const defaultCard =
(    <Card sx={{height: 275, width: 250 }}>
    <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
            <CardContent sx={{ textAlign: "center", fontSize: 12 }}>
                <Typography sx={{fontSize: 14 }}>{potion.name} </Typography>
                <Typography>{potion.description}</Typography>
                <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                    {potion.materials?.map((material, i) => 
                    <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>
                        )}
                </Stack>
                <Typography> 
                </Typography>
            </CardContent>
    </CardActionArea>
    </Card>)

    const editCard = (
        <Card sx={{height: 275, width: 250 }}>
        <CardActionArea sx={{ height: "10%" }} onClick={() => handleClick()}>
            <Typography>Go Back</Typography>
        </CardActionArea>
                <CardContent sx={{ textAlign: "center", fontSize: 12 }}>
                    <form onSubmit={() => handleSubmit()}>
                    <TextField value={potion.name} onChange={(e) => {setName(e.target.value)}}></TextField>
                    <TextField value={potion.description} onChange={(e) => {setDescription(e.target.value)}}></TextField>
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {potion.materials?.map((material, i) => 
                        <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>
                            )}
                    </Stack>
                    </form>
                    <Button type='submit'> Update Changes </Button> 
                    <Button onClick={() => handleDeletePotion()}> Delete </Button>
                </CardContent>
    </Card>
    )

    return (
        editMode ? editCard : defaultCard
    )
}

export default EditPotionCard