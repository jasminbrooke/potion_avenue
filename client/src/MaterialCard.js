import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const MaterialCard = ( { material, setMixture, mixture } ) => {
    const [isSelected, setIsSelected] = useState(false);
    const disabled = !isSelected && mixture.length === 3 //disable cards when there are three materials in mixture

    const handleClick = () => {
        if (!isSelected) {
            setMixture([...mixture, material]) //should add material to the mixture and set card to selected
            setIsSelected(!isSelected)
            console.log(mixture)

        } else if (isSelected) {
            setMixture(mixture.filter((m => m !== material))) //should remove material from mixture and deselect card
            setIsSelected(!isSelected)
            console.log(mixture)
        } 
    }

    const cardStyle =
    {
        maxWidth: 400,
        backgroundColor: isSelected ? "lightblue" : "fff8e8",
        cursor: isSelected ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        pointerEvents: disabled ? "none" : "auto",
        border: 0.5
      }

    return (
        <div>
            <Card sx={{...cardStyle, height: 100 }}>
                <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center"  }}>
                        <Typography variant="body2" color="text.secondary">
                            {material.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MaterialCard