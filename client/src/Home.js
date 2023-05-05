import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import ManageAccount from './ManageAccount';
import Inventory from './Inventory';
import Shopfront from './Shopfront';
import Menu from './Menu'
import CreatePotionForm from "./CreatePotionForm";
import Container from "@mui/material/Container";

const Home = ( { handleLogout } ) => {
  const user = useSelector(state => state.LoginReducer.currentUser)
  const potions = useSelector(state => state.PotionReducer.potions)
  const [materials, setMaterials] = useState([])

  const getMaterials = async () => {
    const response = await fetch('/materials');
    const data = await response.json();
      setMaterials(data);
  }

  const home = (
    
    <Container id="start-game">
      <h2>
        Welcome to Potion Avenue, your very own potion shop! <br />
        To start, create an account. 
        You can manage your account in the Manage Account route.
        In the create a potion route, you can create your very own potion by selecting three materials. 
        There are 12 preset materials to choose from. These materials will determine the attributes of your potion, such as the cost, brew time and quality. 
        Be sure to give your potion a name and description!

        In the menu, you can look at the potions you've already created and see their stats.
        You can also edit, and delete your potions by selecting each potion card.

        In the Inventory, you can see the material stats. 

        In the Shopfront, you can play the game!
      </h2>
    </Container>)

  useEffect(() => {
    getMaterials()
  }, [])

  return (
    <>
  <div id="navContainer">
    <BrowserRouter>
      <NavBar handleLogout={handleLogout} />
      <div>
        <Switch>
          <Route exact path="/manageaccount" element={<ManageAccount />}/>
          <Route exact path="/createnewpotion" element={<CreatePotionForm materials={materials}/>}/>
          <Route exact path="/shopfront" element={<Shopfront materials={materials} />}/>
          <Route exact path="/viewinventory" element={<Inventory materials={materials} />}/>
          <Route exact path="/menu" element={<Menu materials={materials}/>}/>
          <Route exact path="/" element={home}/>
        </Switch>
      </div>
    </BrowserRouter>

  </div>
  </>
  );
}

export default Home;
