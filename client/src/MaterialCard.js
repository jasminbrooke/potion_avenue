import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';

const MaterialCard = ( { material } ) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div>
        <Box gridColumn="span 3">

                <Card style={{"float": "left"}} sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={() => setIsSelected(!isSelected)}>
                        <CardHeader>{material.name}</CardHeader>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {material.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        </Box>
        </div>
    )
}

export default MaterialCard