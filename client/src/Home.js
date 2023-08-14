// import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
// import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import ManageAccount from './ManageAccount';
import Inventory from './Inventory';
import Shopfront from './Shopfront';
import Menu from './Menu'
import CreatePotionForm from "./CreatePotionForm";
import Container from "@mui/material/Container";
import Instructions from "./Instructions";

const Home = ( { handleLogout } ) => {

  const home = (
    
    <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{ width: 600 }}>
        Welcome to Potion Avenue, your very own potion shop! <br />

      </h2>
      <p>Edit Account:</p>
    <ManageAccount />
    </Container>)

  return (
    <>
      <div id="navContainer">
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <div>
            <Switch>
              {/* <Route exact path="/manageaccount" element={<ManageAccount />}/> */}
              <Route exact path="/createnewpotion" element={<CreatePotionForm/>}/>
              <Route exact path="/shopfront" element={<Shopfront />}/>
              <Route exact path="/viewinventory" element={<Inventory />}/>
              <Route exact path="/menu" element={<Menu/>}/>
              <Route exact path="/" element={home}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    </>
  );
}

export default Home;
