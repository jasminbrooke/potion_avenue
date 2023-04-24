import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Test from "./Test"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import PotionList from "./PotionList";

const Shopfront = () => {
    const [customers, setCustomers] = useState([])
    const [customerArray, setCustomerArray] = useState([])

    const getCustomers = async () => {
        const response = await fetch("https://randomuser.me/api/?results=20&inc=name,dob,picture")
        const customerData = await response.json()
        setCustomers(customerData.results)
        setCustomerArray(customerData.results.slice(0, 5))
        console.log(customerArray)
      }

    useEffect(() => {
        getCustomers()
      }, [])
    
    return (
        <div>
            <Box sx={{ maxWidth: 200, margin: '0 auto', height: 600 }}>
            <header>This is the Shopfront</header>
            <CustomerList customerArray={customerArray} />

            <PotionList />
            </Box>
            
        </div>
    )}

export default Shopfront