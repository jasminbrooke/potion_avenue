import React, { useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material"; 

const CustomerCard = ({customer, served, currentCustomer, handleCurrentCustomer}) => {
    const {request, name:{first, last}, dob: {age}, picture: {thumbnail}} = customer
    const [waiting, setWaiting] = useState(false)
    const [message, setMessage] = useState('')

    const handleClick = (customer) => {
        handleCurrentCustomer(customer)
        setMessage('Waiting...')
    }

    const cardStyle =
    {
        width: 200,
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: currentCustomer === customer ?  '#fff8e8' : '#7d4534', 
        opacity: waiting ? '0.5' : '1'
    }

    const unservedCard = (
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
        </CardActionArea>
    )
    const servedCard = (
        <CardActionArea 
        disabled
        onClick={() => {handleClick(customer)}}
            sx={{ height: "100%" }}>
                    <img
                        floated='right'
                        size='mini'
                        src={thumbnail}
                        />
                    <p >{first} of {last}</p>
                    <p sx={{ fontsize: '10' }}>Level {age}</p>
                    <p>{message}</p>
        </CardActionArea>
    )

    return (
        <div>
            <Card sx={{...cardStyle, height: 200, width: 200, raised: true }}>
                {served ? servedCard : unservedCard}
            </Card>
        </div>
    )
    
}

export default CustomerCard