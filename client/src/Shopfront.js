import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Container from "@mui/material/Container";
import PotionList from "./PotionList";

const Shopfront = ( { potions } ) => {
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
            <Container sx={{margin: '0 auto'}}>
              <CustomerList customerArray={customerArray} potions={potions} />
            </Container>
            <Container sx={{margin: '0 auto'}}>
              <PotionList potions={potions} />
            </Container>
        </div>
    )}

export default Shopfront