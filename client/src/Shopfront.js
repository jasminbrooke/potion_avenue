import React, { useState, useEffect } from "react"
import CustomerList from "./CustomerList"
import Container from "@mui/material/Container";
import PotionList from "./PotionList";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import ScienceIcon from '@mui/icons-material/Science';
import { setCurrentUser } from "./actions/LoginActions";
import MaterialGameplay from "./MaterialGameplay";
import CardActionArea from "@mui/material/Card";
import MaterialCard from "./MaterialCard";

const Shopfront = ( { potions, materials } ) => {

  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState({})
  const [mixture, setMixture] = useState([])

  const handleMixture = (mixture) => {
    setMixture(mixture)
    console.log(mixture)
  }

  const handleCurrentCustomer = (customer) => {
      setCurrentCustomer(customer)
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
    let interval = setInterval(() => {
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
  }


  const handleCustomerClick = () => {
  };

  const customerList = (
    <CustomerList
      handleCustomerClick={handleCustomerClick}
      customerArray={customerArray}
      potions={potions}
      handleCurrentCustomer={handleCurrentCustomer}
      currentCustomer={currentCustomer}
    />
  )

  return (
    <Box>
        <Container sx={{margin: '0 auto'}}>
          {playingGame ? customerList : <Button onClick={() => startGame()}>Start Game</Button>}
        </Container>
        <div>
          x
        </div>
        <Container sx={{margin: '0 auto'}}>
          <PotionList potions={potions} />
        </Container>

        <Container sx={{margin: '0 auto', display: "flex"}}>
          {materials.map((material, i) => 
        <MaterialGameplay key={i} handleMixture={handleMixture} mixture={mixture} material={material}/>
          )}
        </Container>
    </Box>
  );
};

export default Shopfront