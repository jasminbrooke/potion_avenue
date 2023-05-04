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

const Shopfront = ( { materials } ) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
  const [points, setPoints] = useState(0)
  const [customers, setCustomers] = useState([])
  const [visibleCustomers, setVisibleCustomers] = useState([])
  const [playingGame, setPlayingGame] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [servedCustomers, setServedCustomers] = useState([]);
  const [waitingCustomers, setwaitingCustomers] = useState([])
  const [feedback, setFeedback] = useState('')

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleServe = (customer, results) => {
    setServedCustomers([...servedCustomers, customer])
    if (!visibleCustomers.includes(customer)) {
      setPoints(points)
    } else if (results.success === true) {
      setPoints(points + 10)
      setFeedback('This is just what I wanted!')
    } else {
      setPoints(points + 5)
      setFeedback('This is all wrong.')
      setMessage('Success!')
      // results.cost > customer.request.cost ?
      // results.quality > customer.request.quality ?
      // results.brew_time > customer.request.brew_time ?
    }
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
    setVisibleCustomers(customerData.results.slice(0, 5))
  }

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers()
    }
  }, [])

  const startGame = () => {
    setPlayingGame(true)
    let index = 5; //skip first five customers
    let interval = setInterval(() => {
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
    }, 10000);
  
    return () => clearInterval(interval);
  }

  const handleCurrentCustomer = (customer) => {
    if (!currentCustomer) {
      setCurrentCustomer(customer)
  } else {
    console.log(currentCustomer)
    console.log('currentCustomer')
  }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    playingGame ?
      <Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {`Successfully created ${message}`}
            </Alert>
          </Snackbar>


        <Typography>{points}</Typography>
        
        <CustomerList
          visibleCustomers={visibleCustomers}
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
        <Button sx={{ fontSize: '8rem', fontFamily: "'Tangerine', cursive;", textTransform: 'lowercase !important;' }} onClick={() => startGame()}>Start Game</Button>
      </Container>
      )
};

export default Shopfront