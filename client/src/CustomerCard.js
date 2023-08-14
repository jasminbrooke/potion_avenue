import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material"; 
import PotionCard from "./PotionCard";

const CustomerCard = ({customer, servedCustomers, waitingCustomers, handleCurrentCustomer, onSelect, selectedCustomer}) => {
    const {request, name, level} = customer
    const served = servedCustomers.includes(customer)
    const waiting = waitingCustomers.includes(customer)
    const selected = selectedCustomer === customer

    useEffect(() => {
        if (selectedCustomer === customer) {
            console.log(selectedCustomer)
        }
      }, [selectedCustomer, customer]);

    const handleClick = (customer) => {
        onSelect(customer)
        handleCurrentCustomer(customer)
    }

    const cardStyle =
    {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: '#7d4534', 
        // backgroundColor: servedCustomers.includes(customer) ? '#00563b' : '#7d4534',
        opacity: waiting && !served ? '0.8' : '1'
    }

    const initialCard = (
        <CardActionArea 
        disabled={waiting}
        onClick={() => {handleClick(customer)}}
            sx={{ height: "100%" }}>
                    {/* <img TBD
                        alt=
                        floated='right'
                        size='mini'
                        // src={thumbnail}
                        /> */}
                    <p sx={{ fontsize: '8' }}>{name}</p>
                    <p>Level {level} </p>
                    <p>"Greetings! <br></br>I am seeking a {request.name}." </p>
                    <p sx={{ fontsize: '10' }} >💬</p>
                    {/* <p>{request.materials.map(material => material.name + ' ')}</p> */}
        </CardActionArea>
    )

    const servedCard = (
        <CardActionArea 
        disabled={served || waiting}
            sx={{ height: "100%", backgroundColor: '#00563b' }}>
                    {/* <img TBD
                        floated='right'
                        size='mini'
                        // src={thumbnail}
                        /> */}
                    <p >{name}</p>
                    <p sx={{ fontsize: '10' }}>Level {level}</p>
                    <p>{served ? 'Thank you!' : 'waiting...'}</p>
        </CardActionArea>
    )
    
    const determineCard = () => {
        if (selected && !waiting) {
            return (
                <div>
                    <PotionCard customer={customer}/>
                </div>
            )
        } else {
            return (
                <div>
                    <Card sx={{...cardStyle, height: 245, width: 200 }}>
                        {served ? servedCard : initialCard}
                    </Card>
                </div>
            )
        }
    }

    return (
        determineCard()
    )
    
}

export default CustomerCard