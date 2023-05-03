import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Container from "@mui/material/Container";
import PotionList from "./PotionList";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import ScienceIcon from '@mui/icons-material/Science';
import { setCurrentUser } from "./actions/LoginActions";
import CardActionArea from "@mui/material/Card";
import MaterialCard from "./MaterialCard";
import Slots from "./Slots";

const Shopfront = ( { potions, materials } ) => {
  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [served, setServed] = useState(false)
  const [feedback, setFeedback] = useState([])




  const handleServe = (customer, results) => {
    if (results.success === true) {
      setFeedback()
    } else {
      // results.cost > customer.request.cost ?
      // results.quality > customer.request.quality ?
      // results.brew_time > customer.request.brew_time ?
    }
  
    
    
    return(

      // comparison.cost > customer.request.cost ? console.log('Too expensive') : console.log('Cheaply made...'),
      // comparison.quality > customer.request.quality ? console.log('Well, la dee da.') : console.log('I think I am gonna be sick!'),
      // comparison.brew_time > customer.request.brew_time ? console.log('Finally!') : console.log('Seems underbrewed...'),
      console.log()
    )
  }
 
  const handleBrew = () => {
    setCurrentCustomer(null) 
  }

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

  const startGame = () => {
    setPlayingGame(true)
    // let interval = setInterval(() => {
    //   setCustomerArray(prevQueue => {
    //     const newQueue = [...prevQueue];
    //     const newCustomerArray = [...customers]
    //     newQueue.shift(); // remove the first customer from the queue
    //     newCustomerArray.shift()
    //     const nextCustomer = newCustomerArray.find(customer => !prevQueue.includes(customer));
    //     return newQueue.concat(nextCustomer);
    //   });
    // }, 20000);
  
    // return () => clearInterval(interval);
  }

  const handleCurrentCustomer = (customer) => {
    if (!currentCustomer) {
      setCurrentCustomer(customer)
  } else {
    console.log(currentCustomer)
  }
  };

  return (
    playingGame ?
      <Box>
        <CustomerList
          customerArray={customerArray}
          potions={potions}
          handleCurrentCustomer={handleCurrentCustomer}
          currentCustomer={currentCustomer}
          served={served}
        /> 
          <div>
            x
          </div>
      <Container sx={{margin: '0 auto'}}>
        <Slots 
          handleBrew={handleBrew} 
          materials={materials} 
          currentCustomer={currentCustomer}
          handleServe={handleServe}/>
        </Container>
      </Box>
      :
      <Container>
      <Button onClick={() => startGame()}>Start Game</Button>
      </Container>
      )
};

export default Shopfront