import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setPotions, removePotion } from "./actions/PotionActions";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import { Button, CardActionArea, TextField } from "@mui/material";

const EditPotionCard = ( { potion } ) => {
    
    const user = useSelector(state => state.LoginReducer.currentUser)
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(potion.name)
    const [description, setDescription] = useState(potion.description)
    const [errors, setErrors] = useState({})

    const handleDeletePotion = () => {
        fetch(`/users/${user.id}/potions/${potion.id}`,{
            method: 'DELETE'
        })
        .then(() => dispatch(removePotion(potion)))
    }

    const handleClick = () => {
        setEditMode(!editMode)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}/potions/${potion.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                description: description
            })
        })
        .then((response) => response.json())
        .then(data => {
            if(data.errors){
                setErrors(data.errors)
            } else {
                setEditMode(false)
                dispatch(setPotions(data))
                setErrors({})
            }
        })
    }

    const color = '#fff8e8';


    const cardStyle = {
        border: '1px solid #000',
        padding: '16px',
        boxSizing: 'border-box', // Add this line
        // '& > *': {
        //   border: '3px solid #000',
        //   padding: '8px',
        // },
        
    }

    const defaultCard = (
        <Card sx={{height: 275, width: 250, backgroundColor: color, ...cardStyle }}>
            <CardActionArea sx={{ 
                height: "100%", 
                border: '3px solid #000',
                padding: '8px', }} 
                onClick={() => handleClick()}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{potion.name}</Typography>
                    <Typography sx={{ fontsize: 50 }}>⚗️</Typography>
                    <Typography sx={{ mb: 2 }}>{potion.description}</Typography>
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            potion.materials?.map((material, i) => <Typography key={i}>{material.description}</Typography>)
                        }
                    </Stack>
                    <Typography sx={{ mb: 1 }}>| 💰: {potion.cost} | ⌛: {potion.brew_time} |</Typography>
                    </CardContent>
            </CardActionArea>
            <Typography sx={{ fontSize: 10 }}> Select Card to make changes</Typography>
        </Card>
    )

    const editCard = (
        <Card sx={{height: 275, width: 250 }}>
            <CardContent sx={{ textAlign: "center", fontSize: 12 }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        error={errors.name?.[0]}
                        defaultValue={potion.name}
                        helperText={errors.name?.[0]}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                    />
                    <TextField
                        error={errors.description}
                        helperText={errors.description?.[0]}
                        defaultValue={potion.description}
                        onChange={(e) => setDescription(e.target.value)}
                        label="Description"
                    />
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            potion.materials?.map((material, i) => <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>)
                        }
                    </Stack>
                    <Button type='submit'> Update Changes </Button> 
                </form>
                <Button onClick={() => handleDeletePotion()}> Delete </Button>
            </CardContent>
            <CardActionArea  onClick={() => handleClick()}>
                <Typography>Go Back</Typography>
            </CardActionArea>
        </Card>
    )

    return (
        editMode ? editCard : defaultCard
    )
}

export default EditPotionCard