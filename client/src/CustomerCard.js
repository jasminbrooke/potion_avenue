import React, { useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material"; 

const CustomerCard = ({customer, servedCustomers, waitingCustomers, currentCustomer, handleCurrentCustomer}) => {
    const {request, name:{first, last}, dob: {age}, picture: {thumbnail}} = customer
    const served = servedCustomers.includes(customer)
    const waiting = waitingCustomers.includes(customer)

    const handleClick = (customer) => {
        handleCurrentCustomer(customer)
    }

    const cardStyle =
    {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: currentCustomer === customer ?  '#fff8e8' : '#7d4534', 
        // backgroundColor: servedCustomers.includes(customer) ? '#00563b' : '#7d4534',
        opacity: waiting && !served ? '0.8' : '1'
    }

    const initialCard = (
        <CardActionArea 
        disabled={waiting}
        onClick={() => {handleClick(customer)}}
            sx={{ height: "100%" }}>
                    <img
                        floated='right'
                        size='mini'
                        src={thumbnail}
                        />
                    <p >{first} of {last}</p>
                    <p sx={{ fontsize: '10' }}>Level {age}</p>
                    <p>Greetings! I am seeking a {request.name}.</p>
                    <p>{request.materials.map((material, i) => material.name)}</p>
        </CardActionArea>
    )

    const servedCard = (
        <CardActionArea 
        disabled={served || waiting}
            sx={{ height: "100%" }}>
                    <img
                        floated='right'
                        size='mini'
                        src={thumbnail}
                        />
                    <p >{first} of {last}</p>
                    <p sx={{ fontsize: '10' }}>Level {age}</p>
                    <p>{served ? 'Thank you!' : 'waiting...'}</p>
        </CardActionArea>
    )
    

    return (
        <div>
            <Card sx={{...cardStyle, height: 200, width: 200 }}>
                {served ? servedCard : initialCard}
            </Card>
        </div>
    )
    
}

export default CustomerCard