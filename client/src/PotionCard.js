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
    
    const handleClick = () => {
        console.log(potion)
        console.log(potion.materials)
        setBrewing(true)
        setTimeout(() => {
            setBrewing(false);
          }, 5000);
        // handleBrew()
    }

    const defaultCard = (        
        <Card sx={{height: 200, width: 200 }}>
            <CardActionArea sx={{ height: "100%" }} onClick={() => handleClick()}>
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
                        <Typography> <ScienceIcon /> </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    )

    return (
        brewing ? brewingCard : defaultCard
    )
}

export default PotionCard