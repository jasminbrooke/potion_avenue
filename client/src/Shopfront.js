import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Container from "@mui/material/Container";
import PotionList from "./PotionList";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ScienceIcon from '@mui/icons-material/Science';
import { setCurrentUser } from "./actions/LoginActions";
import CardActionArea from "@mui/material/Card";
import MaterialCard from "./MaterialCard";
import Slots from "./Slots";
import Alert from "@mui/material/Alert";

const Shopfront = ( { materials } ) => {
  const [points, setPoints] = useState(0)
  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [servedCustomers, setServedCustomers] = useState([]);
  const [waitingCustomers, setwaitingCustomers] = useState([])
  const [feedback, setFeedback] = useState('')

  const handleServe = (customer, results) => {

    setServedCustomers([...servedCustomers, customer])
    if (results.success === true) {
      setPoints(points + 10)
      setFeedback('This is just what I wanted!')
    } else {
      setPoints(points + 5)
      setFeedback('This is all wrong.')
      // results.cost > customer.request.cost ?
      // results.quality > customer.request.quality ?
      // results.brew_time > customer.request.brew_time ?
    }
    
    return(

      console.log()
    )
  }
 
  const handleBrew = (customer) => {
    setwaitingCustomers([...waitingCustomers, customer])
    setCurrentCustomer(null) 
    console.log('waiting' + waitingCustomers.length)
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
    console.log('currentCustomer')
  }
  };

  return (
    playingGame ?
      <Box>
        <Typography>{points}</Typography>
        <CustomerList
          customerArray={customerArray}
          handleCurrentCustomer={handleCurrentCustomer}
          currentCustomer={currentCustomer}
          servedCustomers={servedCustomers}
          waitingCustomers={waitingCustomers}
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
      <Container id="start-game">
        <Button sx={{ fontSize: '2rem' }} onClick={() => startGame()}>Start Game</Button>
      </Container>
      )
};

export default Shopfront