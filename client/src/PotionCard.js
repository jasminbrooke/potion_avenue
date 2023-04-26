import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';
import ScienceIcon from '@mui/icons-material/Science';


const PotionCard = ( { potion } ) => {
    const [brewing, setBrewing] = useState(false)
    const [remainingTime, setRemainingTime] = useState(null);
    const timer = potion.brew_time
    
    const handleClick = () => {
        console.log(potion)
        console.log(potion.materials)
        setBrewing(true)
        setRemainingTime(timer);
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);
        setTimeout(() => {
            setBrewing(false);
          }, timer * 1000);
    }

    const defaultCard = (        
        <Card sx={{height: 200, width: 200 }}>
            <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()} disabled={brewing}>
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: 14 }}>
                            {potion.description}
                        </Typography>
                            {potion.materials?.map((material, i) => <ul key={i}>
                                <li>{material.name}</li>
                            </ul>)}
                        <Typography> <ScienceIcon />
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
    
    const brewingCard = (
        <Card sx={{height: 200, width: 200 }}>
            <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
                    <CardContent sx={{ textAlign: "center", fontSize: 20 }}>
                        <Typography> 
                        {remainingTime !== null && <p>Time remaining: {remainingTime}s</p>}
                            <ScienceIcon /> </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )

    return (
        brewing ? brewingCard : defaultCard
    )
}

export default PotionCard