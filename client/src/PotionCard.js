import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ScienceIcon from '@mui/icons-material/Science';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PotionCard = ( { customer } ) => {
    const potion = customer.request
    const color = '#fff8e8';
    const [remainingTime, setRemainingTime] = useState(null);
    const timer = potion.brew_time

    const cardStyle = {
        alignItems: "center",
        height: 245, 
        width: 200,
        backgroundColor: '#fff8e8',
        border: '1px solid #000',
        padding: '16px',
        boxSizing: 'border-box',
    }

    const defaultCard = (        
        <Card sx={{...cardStyle }}>       
                <CardActionArea sx={{ 
                height: "100%", 
                border: '3px solid #000',
                padding: '8px', }} >
            <CardContent 
            sx={{ textAlign: "center" }}>
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                        {potion.materials?.map((material, i) => (
                    <div key={i} style={{ listStyleType: 'none' }}>
                    <Typography sx={{ fontSize: 24 }}>{material.description}</Typography>
                    </div>
                    ))}
                    </Stack>
                    <Typography sx={{ fontSize: 12 }}>
                    {potion.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )

    return (
        // brewing ? brewingCard : 
        defaultCard
    )
}

export default PotionCard