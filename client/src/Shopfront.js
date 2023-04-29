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
  //put current order in redux?
  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState({})
  const [mixture, setMixture] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState({})
  const [full, setFull] = useState(false)

  const handleBrew = () => {
    //subtract from materials quantity
    //set card to brewing (bubbles)
    //if mixture === selectedpotionrecipecard.materials array
      //success! customer is happy, add to budget
    //else customer is like "i think im gonna be sick... D="
    //no sale
    //clear mixture, deselect everything
  }

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

  const handleBottleClick = (customer) => {
    // if request.quantity > 0
        // request.quantity - 1
        // 
        //check mixture brew time with potion brew time discrepency, 
        //if mixture.brew_time < potion.brew_time ... overbrewed!
    setFull(true)
  }

  const handleCustomerClick = (request) => {
    setSelectedRecipe(request)
    console.log("this is the request:" + request)
  };

  const customerList = (
    <CustomerList
      handleCustomerClick={handleCustomerClick}
      customerArray={customerArray}
      potions={potions}
      handleCurrentCustomer={handleCurrentCustomer}
      currentCustomer={currentCustomer}
      selectedRecipe={selectedRecipe}
      handleBottleClick={handleBottleClick}
    />
  )

  return (
    <Box>
        <Container sx={{margin: '0 auto'}}>
          {playingGame ? customerList : <Button onClick={() => startGame()}>Start Game</Button> }
        </Container>
        <div>
          x
        </div>
        <Container sx={{margin: '0 auto'}}>
          <PotionList potions={potions} selectedRecipe={selectedRecipe} mixture={mixture} handleMixture={handleMixture}/>
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