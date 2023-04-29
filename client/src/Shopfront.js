import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Container from "@mui/material/Container";
import PotionList from "./PotionList";
import { Box } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import { setCurrentUser } from "./actions/LoginActions";

const Shopfront = ( { potions } ) => {
  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [served, setServed] = useState(false)
  const [timer, setTimer] = useState()

  const getCustomers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100&inc=name,dob,picture")
    const customerData = await response.json()
    setCustomers(customerData.results)
    setCustomerArray(customerData.results.slice(0, 5))
  }

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers()
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerArray(prevQueue => {
        const newQueue = [...prevQueue];
        const newCustomerArray = [...customers]
        newQueue.shift(); // remove the first customer from the queue
        newCustomerArray.shift()
        const nextCustomer = newCustomerArray.find(customer => !prevQueue.includes(customer));
        return newQueue.concat(nextCustomer);
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [customerArray]);


  const handleCustomerClick = () => {
    setServed(true)
  };

  return (
    <Box>
        <Container sx={{margin: '0 auto'}}>
          <CustomerList setServed={setServed} handleCustomerClick={handleCustomerClick} customerArray={customerArray} potions={potions} served={served}/>
        </Container>
        <div>
          x
        </div>
        <Container sx={{margin: '0 auto'}}>
          <PotionList potions={potions} />
        </Container>
    </Box>
  );
};

export default Shopfront