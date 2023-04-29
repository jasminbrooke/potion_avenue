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
        console.log(potion);
        fetch(`/users/${user.id}/potions/${potion.id}`,{
            method: 'DELETE'
        })
        .then(() => dispatch(removePotion(potion)))
    }

    const handleClick = () => {
        setEditMode(!editMode)
        console.log(potion)
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
                dispatch(setPotions(data))
                setErrors({})
            }
        })
    }

    const defaultCard = (
        <Card sx={{height: 275, width: 250, backgroundColor: '#fff8e8' }}>
            <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                <CardContent sx={{ textAlign: "center", fontSize: 12 }}>
                    <Typography sx={{fontSize: 14 }}>{potion.name}</Typography>
                    <Typography>{potion.description}</Typography>
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            potion.materials?.map((material, i) => <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>)
                        }
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )

    const editCard = (
        <Card sx={{height: 275, width: 250 }}>
            <CardActionArea sx={{ height: "10%" }} onClick={() => handleClick()}>
                <Typography>Go Back</Typography>
            </CardActionArea>
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
        </Card>
    )

    return (
        editMode ? editCard : defaultCard
    )
}

export default EditPotionCard