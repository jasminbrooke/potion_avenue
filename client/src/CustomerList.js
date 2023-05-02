import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard"
import Grid from '@mui/material/Grid'; // Grid version 1
import Stack from '@mui/material/Stack';

const CustomerList = ( {potions, customerArray, handleCurrentCustomer, currentCustomer, served } ) => {
    
    customerArray.forEach(customer => {
        if(!customer.request) {
            customer.request = potions[Math.floor(Math.random() * potions.length)]
        }})

    return (
        <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
            {customerArray.map((customer, i) => 
            <CustomerCard 
                key={i} 
                customer={customer} 
                handleCurrentCustomer={handleCurrentCustomer}
                currentCustomer={currentCustomer}
            />)}
        </Stack>
    )}

export default CustomerList