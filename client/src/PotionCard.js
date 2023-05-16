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
        justifyContent: "center",
        alignItems: "center",
        height: 245, 
        width: 200,
        backgroundColor: '#fff8e8',
        border: '1px solid #000',
        padding: '16px',
        boxSizing: 'border-box', // Add this line
        '& > *': {
          border: '3px solid #000',
          padding: '8px',
          borderRadius: '5px'
        }
        
    }

    const defaultCard = (        
        <Card sx={{...cardStyle }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 12 }}>
                    {potion.description}
                </Typography>
                    <Stack direction="column" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {potion.materials?.map((material, i) => (
                    <div key={i} style={{ listStyleType: 'none' }}>
                    <Typography sx={{ fontSize: 24 }}>{material.description}</Typography>
                    </div>
                    ))}
                    </Stack>
            </CardContent>
        </Card>
    )

    return (
        // brewing ? brewingCard : 
        defaultCard
    )
}

export default PotionCard