import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";

const CustomerCard = ({customer}) => {
    const {name:{first, last}, dob: {age}, picture: {thumbnail}} = customer

    const cardStyle =
    {
        width: 200,
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
      }
    
    return (
            <Card sx={{...cardStyle, height: 100, width: 150 }}>
                <CardActionArea sx={{ height: "100%" }}>
                    <img
                    floated='right'
                    size='mini'
                    src={thumbnail}
                    />
                    {first}
                </CardActionArea>
            </Card>
    )
    
}

export default CustomerCard