import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from "@mui/material"; 
import ScienceIcon from '@mui/icons-material/Science';

const CustomerCard = ({customer, served, currentCustomer, handleCurrentCustomer}) => {
    const {request, name:{first, last}, dob: {age}, picture: {thumbnail}} = customer

    const handleClick = (customer) => {
        handleCurrentCustomer(customer)
        console.log(customer)
        console.log(currentCustomer)
    }

    const color = '#fff8e8';

    const cardStyle =
    {
        width: 200,
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: currentCustomer === customer ?  '#fff8e8' : '#7d4534'
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
        onClick={() => {handleClick(customer)}}
            sx={{ height: "100%" }}>
                    <img
                        floated='right'
                        size='mini'
                        src={thumbnail}
                        />
                    <p >{first} of {last}</p>
                    <p sx={{ fontsize: '10' }}>Level {age}</p>
                    <p>"Greetings! Please give me a {request.name} "</p>
        </CardActionArea>
    )


    
    return (
        <div>
        <Card sx={{...cardStyle, height: 200, width: 200, raised: true }}>

        {served ? servedCard : defaultCard}
        </Card>
        <ScienceIcon sx={{ fontSize: 150, color: '#FFFFFF' + '80' }} />
        </div>
    )
    
}

export default CustomerCard