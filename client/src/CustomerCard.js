import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from "@mui/material"; 
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';

const CustomerCard = ({customer, served, currentCustomer, handleCurrentCustomer, handleBottleClick, handleCustomerClick}) => {
    const [full, setFull] = useState(false)
    const {request, name:{first, last}, dob: {age}, picture: {thumbnail}} = customer
    // const readytofill = 

    const handleClick = (customer) => {
        handleCurrentCustomer(customer)
        handleCustomerClick(request)
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

    const bottleStyle = {
        color: full ? 'success' : '#FFFFFF' + '80',
        
    }


    
    return (
        <div>
        <Card sx={{...cardStyle, height: 200, width: 200, raised: true }}>

        {served ? servedCard : defaultCard}
        </Card>
        <IconButton onClick={() => handleBottleClick(customer)} >
            <ScienceIcon sx={{ ...bottleStyle, fontSize: 150 }}/>
        </IconButton>
        </div>
    )
    
}

export default CustomerCard