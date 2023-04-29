import React, { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const MaterialGameplay = ( { mixture, handleMixture, material } ) => {
    const [isSelected, setIsSelected] = useState(false);
    const disabled = !isSelected && mixture.length === 3 //disable cards when there are three materials in mixture

    const handleClick = (material) => {
        if (!isSelected) {
            handleMixture([...mixture, material]) //should add material to the mixture and set card to selected
            setIsSelected(!isSelected)
            console.log(mixture)

        } else if (isSelected) {
            handleMixture(mixture.filter((m => m !== material))) //should remove material from mixture and deselect card
            setIsSelected(!isSelected)
            console.log(mixture)
        } 
    }

    const cardStyle =
    {
        width: 200,
        height: 100,
        backgroundColor: isSelected ? "lightblue" : "fff8e8",
        cursor: isSelected ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
        margin: .5,
      }

    return (
        <>
            <Card key={material.id} sx={{...cardStyle}}>
                <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick(material)}>
                    <CardHeader>{material.name}</CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {material.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default MaterialGameplay