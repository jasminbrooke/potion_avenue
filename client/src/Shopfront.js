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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Instructions from "./Instructions";
import { useSelector } from "react-redux";

const Alert1 = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Shopfront = () => {
  const materials = useSelector(state => state.MaterialReducer.materials)

  const [open, setOpen] = useState(false);
  const [points, setPoints] = useState(0)
  const [customers, setCustomers] = useState([])
  const [visibleCustomers, setVisibleCustomers] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [servedCustomers, setServedCustomers] = useState([]);
  const [waitingCustomers, setWaitingCustomers] = useState([])
  const [feedback, setFeedback] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const getCustomers = () => {
    fetch("/customers").then((response) => {
      response.json().then((customers) => setCustomers(customers))
    })
    console.log(customers)
  }

  useEffect(() => {
    getCustomers();
    setVisibleCustomers(customers.slice(0, 5))
    console.log(customers)
    console.log(visibleCustomers)
  }, []);


  const handleServe = (customer, results) => {
    setServedCustomers([...servedCustomers, customer])
    if (!visibleCustomers.includes(customer)) {
      setPoints(points - 5)
      setFeedback([...feedback, `${customer.name} says 'Just forget it.'`])
    } else if (results.success === true) {
      setPoints(points + 10)
      setFeedback([...feedback, `${customer.name} says "This is just what I wanted!"`]);
    } else if (results.cost < customer.request.cost) {
      setPoints(points + 5)
      setFeedback([...feedback, `${customer.name} says "What a rip off."`])
    } else if (results.quality < customer.request.quality) {
      setPoints(points + 5)
      setFeedback([...feedback, `${customer.name} says "I think I'm gonna be sick!"`])
    } else if (results.brew_time < customer.request.brew_time) {
      setPoints(points + 5)
      setFeedback([...feedback, `${customer.name} says "Seems overbrewed..."`])
    } else {
      setPoints(points - 5)
      setFeedback([...feedback, `${customer.name} says "This is NOT what I ordered."`])
    }
    setOpen(true)
  }

 
  const handleBrew = (customer) => {
    setWaitingCustomers([...waitingCustomers, customer])
    setCurrentCustomer(null) 
  }

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers()
    }
  }, [])

  const startGame = () => {
    setCurrentCustomer(null)
    setServedCustomers([])
    setWaitingCustomers([])
    setVisibleCustomers(customers.slice(0, 5))
    setPoints(0)
    setPlayingGame(true)
    let index = 5; //skip first five customers
    let interval = setInterval(() => {
      if (index >= 15){
        console.log("hello " + index)
        setGameOver(true)
        setPlayingGame(false)
        clearInterval(interval)
        return
      }
      setVisibleCustomers(prevQueue => {
        const newQueue = [...prevQueue];
        newQueue.shift(); // remove the first customer from the queue
        index++;
        if (index < customers.length) {
          // add the next customer to the queue
          newQueue.push(customers[index]);
        }
        return newQueue
      });
    }, 15000);
  
    return () => clearInterval(interval);
  }

  const handleCurrentCustomer = (customer) => {
    if (!currentCustomer) {
      setCurrentCustomer(customer)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const renderGame = () => {
    return (
      <Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert feedback={feedback} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {feedback[feedback.length - 1]}
            </Alert>
          </Snackbar>

        <Typography sx={{fontSize: "3rem"}}>{points}</Typography>
        
        <CustomerList
          visibleCustomers={visibleCustomers}
          handleCurrentCustomer={handleCurrentCustomer}
          currentCustomer={currentCustomer}
          servedCustomers={servedCustomers}
          waitingCustomers={waitingCustomers}
        /> 
      <Container sx={{margin: '0 auto'}}>
        <Slots 
          handleBrew={handleBrew} 
          materials={materials} 
          currentCustomer={currentCustomer}
          handleServe={handleServe}/>
        </Container>
      </Box>)
  }


  const reviews = (
    feedback.map((f, i) => <Typography key={i} f={f}>"{f}"</Typography>)
  )


  const renderStartGame = () => {
    return (
      <>
        {gameOver ? (
          <>
        <Typography>Your Score: {points}</Typography>
        {reviews}
          </>
        ) : null}
        <Container id="start-game">
          <Button sx={{ fontSize: '8rem', fontFamily: "'Tangerine', cursive;", textTransform: 'lowercase !important;' }} onClick={() => startGame()}>Start Game</Button>
        </Container>
        <Instructions />
      </>
    )
  }


  return ( playingGame ? renderGame() : renderStartGame() )
};

export default Shopfront