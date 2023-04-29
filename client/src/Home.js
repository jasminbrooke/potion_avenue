import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import ManageAccount from './ManageAccount';
import Inventory from './Inventory';
import Shopfront from './Shopfront';
import Menu from './Menu'
import CreatePotionForm from "./CreatePotionForm";

const Home = () => {
  const user = useSelector(state => state.LoginReducer.currentUser)
  const [materials, setMaterials] = useState([])
  const [potions, setPotions] = useState(user.potions)

  const getMaterials = async () => {
    const response = await fetch('/materials');
    const data = await response.json();
      setMaterials(data);
  }
  
  useEffect(() => {
    setPotions(user.potions)
  }, [user])

  useEffect(() => {
    getMaterials()
  }, [])

  return (

  <div id="navContainer">
    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="manageaccount" element={<ManageAccount />}/>
        </Switch>

        <Switch>
          <Route exact path="createnewpotion" element={<CreatePotionForm materials={materials}/>}/>
        </Switch>

        <Switch>
          <Route exact path="shopfront" element={<Shopfront potions={potions}/>}/>
        </Switch>

        <Switch>
          <Route exact path="viewinventory" element={<Inventory materials={materials} potions={potions}/>}/>
        </Switch>

        <Switch>
          <Route exact path="menu" element={<Menu materials={materials}/>}/>
        </Switch>

      </div>
    </BrowserRouter>
  </div>
  );
}

export default Home;
