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
  //put current order in redux?
  const [customers, setCustomers] = useState([])
  const [customerArray, setCustomerArray] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState({})
  const [brewingMaterials, setBrewingMaterials] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState({})
  const [comparison, setComparison] = useState({})

  const handleServe = () => {
    //get points and feedback
    return(
      comparison.cost > selectedRecipe.cost ? console.log('Too expensive') : console.log('Cheaply made...'),
      comparison.quality > selectedRecipe.quality ? console.log('Well, la dee da.') : console.log('I think I am gonna be sick!'),
      comparison.brew_time > selectedRecipe.brew_time ? console.log('Finally!') : console.log('Seems underbrewed...')
    )
  }
 
  const handleBrew = () => {
    return(
      //determine if brewingMaterials and selectedRecipe matches
      comparison.cost === selectedRecipe.cost ? console.log('Thank you!') : ('error'),
      comparison.time === selectedRecipe.brew_time ? console.log('Thank you!') : ('error'),
      comparison.quality === selectedRecipe.quality ? console.log('Thank you!') : ('error')
    )
  }

  const handleMix = (brewingMaterials) => {
    const results = brewingMaterials.reduce((accumulator, material) => { 
      ['cost', 'quality', 'time'].forEach(key => {
        accumulator[key] ||= 0
        accumulator[key] += material[key]
      })
        return (accumulator)
    }, {})
    console.log(results)
    console.log('Current customer' + currentCustomer.name)
    console.log('Recipe' + selectedRecipe.name)
    setBrewingMaterials([])
    setComparison(results)


    //if results.cost >
    //if results.brew_time >
    //if results.quality >

    //subtract from materials quantity
    //set card to brewing (bubbles)
    //if brewingMaterials === selectedpotionrecipecard.materials array
      //success! customer is happy, add to budget
    //else customer is like "i think im gonna be sick... D="
    //no sale
    //clear brewingMaterials, deselect everything
  }

  const handleMixture = (material) => {
    if (brewingMaterials.includes(material)) {
      setBrewingMaterials((prevMaterials => [...prevMaterials.filter((m => m !== material ))]))
    } else if (brewingMaterials.length < 3 && !brewingMaterials.includes(material)) {
      setBrewingMaterials((prevMaterials => [...prevMaterials, material]))
    }
    console.log(brewingMaterials)
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


  const handleCustomerClick = (request) => {
    debugger
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
        <Slots 
        handleMix={handleMix} 
        handleBrew={handleBrew} 
        brewingMaterials={brewingMaterials} 
        materials={materials} 
        handleMixture={handleMixture}
        selectedRecipe={selectedRecipe}
        handleServe={handleServe}/>
    </Container>
    </Box>
  );
};

export default Shopfront