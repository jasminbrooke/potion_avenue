import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material"; 

const CustomerCard = ({customer, handleCustomerClick, served}) => {
    const {name:{first, last}, dob: {age}, picture: {thumbnail}} = customer
    
    const cardStyle =
    {
        width: 200,
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: '#7d4534'
        // backgroundImage: "url(/assets/wood.avif)"
    }


    const servedCard = (
        <CardActionArea
            sx={{ height: "100%" }}>
                <img
                    floated='right'
                    size='mini'
                    src={thumbnail}
                    />
            <p>{first} of {last}</p>
            <p sx={{ fontsize: '10' }}>Level {age}</p>
            <p>"Thank you!"</p>
        </CardActionArea>
    )

    const defaultCard = (
        <CardActionArea 
        onClick={() => {handleCustomerClick(customer)}}
            sx={{ height: "100%" }}>
                <img
                    floated='right'
                    size='mini'
                    src={thumbnail}
                    />
            <p>{first} of {last}</p>
            <p sx={{ fontsize: '10' }}>Level {age}</p>
            <p>"Greetings! Please give me a random potion."</p>
        </CardActionArea>
    )


    
    return (
        <Card sx={{...cardStyle, height: 150, width: 200, raised: true }}>

        {served ? servedCard : defaultCard}
        </Card>
    )
    
}

export default CustomerCard