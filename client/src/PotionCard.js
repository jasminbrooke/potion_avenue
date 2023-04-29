import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ScienceIcon from '@mui/icons-material/Science';
import Stack from "@mui/material/Stack";

const PotionCard = ( { potion } ) => {
    const color = '#fff8e8';

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
                        <Typography sx={{ fontSize: 12 }}>
                            {potion.description}
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            potion.materials?.map((material, i) => <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>)
                        }
                    </Stack>


                        {/* </Typography>
                            {potion.materials?.map((material, i) => <ul key={i}>
                                <li>{material.name}</li>
                            </ul>)}
                        <Typography> <ScienceIcon /> */}
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
                        {/* {remainingTime !== null && <p>Time remaining: {remainingTime}s</p>} */}
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