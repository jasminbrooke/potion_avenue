import React, { useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ScienceIcon from '@mui/icons-material/Science';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PotionCard = ( { potion, selectedRecipe, handleMixture, mixture } ) => {
    const color = '#fff8e8';
    const [brewing, setBrewing] = useState(false)
    const [remainingTime, setRemainingTime] = useState(null);
    const timer = potion.brew_time
    const readytoBrew = mixture.length === 3 && selectedRecipe.name === potion.name
    const disabled = !selectedRecipe || selectedRecipe.name !== potion.name;
    
    const handleClick = (potion) => {
        console.log(potion)
        setBrewing(true)
        //deselectcard when brewing so you can move on
        handleMixture([])
        setRemainingTime(timer);
        
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000);
        setTimeout(() => {
            setBrewing(false);
        }, timer * 1000);
    }

    const cardStyle = {
        backgroundColor: selectedRecipe.name === potion.name ? '#fff8e8' : '#7d4534',
    }

    const defaultCard = (        
        <Card sx={{...cardStyle, height: 200, width: 200 }}>
            {/* <CardActionArea sx={{ height: "100%" }} > */}
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: 12 }}>
                            {potion.description}
                                </Typography>
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            potion.materials?.map((material, i) => <Typography sx={{fontSize: 12 }} key={i}>|{material.name}|</Typography>)
                        }
                    </Stack>
                    <Button onClick={() => handleClick(potion)} disabled={!readytoBrew || disabled}> 
                        {readytoBrew ? 'READY TO BREW' : 'Select three materials!'}
                    </Button>


                        {/* </Typography>
                            {potion.materials?.map((material, i) => <ul key={i}>
                                <li>{material.name}</li>
                            </ul>)}
                        <Typography> <ScienceIcon /> */}
                    </CardContent>
                    
            {/* </CardActionArea> */}
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