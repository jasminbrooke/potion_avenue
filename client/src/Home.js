import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import ManageAccount from './ManageAccount';
import Inventory from './Inventory';
import Shopfront from './Shopfront';
import Menu from './Menu'
import CreatePotionForm from "./CreatePotionForm";

const Home = ( { handleLogout } ) => {
  const user = useSelector(state => state.LoginReducer.currentUser)
  const potions = useSelector(state => state.PotionReducer.potions)
  const [materials, setMaterials] = useState([])

  const getMaterials = async () => {
    const response = await fetch('/materials');
    const data = await response.json();
      setMaterials(data);
  }

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
        </Switch>

        <Switch>
          <Route exact path="/createnewpotion" element={<CreatePotionForm materials={materials}/>}/>
        </Switch>

        <Switch>
          <Route exact path="/shopfront" element={<Shopfront materials={materials} />}/>
        </Switch>

        <Switch>
          <Route exact path="/viewinventory" element={<Inventory materials={materials} />}/>
        </Switch>

        <Switch>
          <Route exact path="/menu" element={<Menu materials={materials}/>}/>
        </Switch>

      </div>
    </BrowserRouter>
  </div>
  </>
  );
}

export default Home;
