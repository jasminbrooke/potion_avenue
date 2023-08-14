import React, { useState } from "react";
import { useSelector } from 'react-redux'
import CustomerCard from "./CustomerCard"
import Stack from '@mui/material/Stack';

const CustomerList = ( { visibleCustomers, handleCurrentCustomer, currentCustomer, servedCustomers, waitingCustomers } ) => {
    const potions = useSelector(state => state.PotionReducer.potions)
    const [selectedCustomer, setSelectedCustomer] = useState({})

    const onSelect = (customer) => {
        setSelectedCustomer(customer)
        console.log(customer.request)
    }
    
    visibleCustomers.forEach(customer => {
        if(!customer.request) {
            customer.request = potions[Math.floor(Math.random() * potions.length)]
        }})

    return (
        <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}} >
            {visibleCustomers.map((customer, i) => 
            <CustomerCard 
                key={i} 
                customer={customer} 
                handleCurrentCustomer={handleCurrentCustomer}
                currentCustomer={currentCustomer}
                servedCustomers={servedCustomers}
                waitingCustomers={waitingCustomers}
                onSelect={onSelect}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
            /> 
            )}
        </Stack>
    )}

export default CustomerList