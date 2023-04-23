import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';
import { addMaterial, removeMaterial } from "./actions/materialActions";
import { useDispatch, useSelector } from "react-redux"

const MaterialCard = ( { material } ) => {
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();
    const materialArray = useSelector(state => state.materialReducer.materials)
    const disabled = !isSelected && materialArray.length === 3

    const handleClick = () => {
        if (isSelected) {
            dispatch(removeMaterial(material))
            setIsSelected(!isSelected)
        } else if (materialArray.length < 3) {
            dispatch(addMaterial(material))
            setIsSelected(!isSelected)
        } 
    }


    const cardStyle =
    {
        maxWidth: 400,
        backgroundColor: isSelected ? "lightblue" : "white",
        cursor: isSelected ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        pointerEvents: disabled ? "none" : "auto",
      }

    return (
        <div>
        {/* <Box gridColumn="span 3"> */}
                <Card sx={{...cardStyle, height: 150 }}>
                    <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                        <CardHeader>{material.name}</CardHeader>
                        <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                        {material.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        {/* </Box> */}
        </div>
    )
}

export default MaterialCard