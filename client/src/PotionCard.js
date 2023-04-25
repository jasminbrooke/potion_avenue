import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';


const PotionCard = ( { potion } ) => {

    const handleClick = () => {
        console.log(potion)
        console.log(potion.materials)
    }

    return (
        <Card sx={{height: 150, width: 200 }}>
            <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: 14 }}>
                            {potion.description}
                        </Typography>
                            {potion.materials?.map((material, i) => <ul key={i}>
                                <li>{material.name}</li>
                            </ul>)}
                        <Typography>
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PotionCard