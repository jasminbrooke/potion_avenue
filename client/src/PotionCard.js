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
    }


    return (
        <div>
                    {/* <Box gridColumn="span 3"> */}
                    <Card sx={{height: 150 }}>
                    <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                        <CardHeader>{potion.name}</CardHeader>
                        <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                        {potion.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        {/* </Box> */}



        </div>
    )
}

export default PotionCard