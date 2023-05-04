import './App.css';
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import LogIn from './LogIn'
import SignUp from './SignUp'
import Home from './Home'
import { setCurrentUser } from "./actions/LoginActions";
import { setPotions } from "./actions/PotionActions"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
        // call users#show and check if anyone is logged in by checking the session
        // if so, set them as the current user
        // if not, do nothing
      }
    });
  }, []);

  const handleLogin = (user) => {
    dispatch(setCurrentUser(user));
    dispatch(setPotions(user.potions))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    fetch('/logout', {
        method: 'DELETE',
    })
    .then(() => {
      dispatch(setCurrentUser(null))
      setIsLoggedIn(false)
    })
  }

  const renderPage = (() => {
    if(isLoggedIn) {
      return (
          <Home handleLogout={handleLogout}/>
      )
    } else {
      return (
        <div id="login">
          <Typography variant="h2" sx={{ fontFamily: "'Tangerine', cursive;", fontSize: '10rem'}}>Potion Avenue</Typography>
          <Typography variant="h4">Log In or Sign Up!</Typography>
          <LogIn handleLogin={handleLogin} />
          <SignUp handleLogin={handleLogin} />
        </div>
      )
    }
  })

  return (
    <div>
      <div className="App">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
