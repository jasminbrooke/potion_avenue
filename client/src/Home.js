import CreateNewPotion from './CreateNewPotion';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from './NavBar'
import ManageAccount from './ManageAccount';
import { useEffect, useState } from "react"
import Inventory from './Inventory';
import Shopfront from './Shopfront';
import Menu from './Menu'

function Home() {
  const [materials, setMaterials] = useState([])
  const [potions, setPotions] = useState([])

  useEffect(() => {
      getMaterials()
      getPotions()
    }, [])

  const getMaterials = () => {
      fetch('/materials')
      .then(response => response.json())
      .then(data => {
        setMaterials(data);
      })
  }

  const getPotions = () => {
    fetch('/potions')
    .then(response => response.json())
    .then(data => {
      setPotions(data);
      console.log(data)
    })
}


  return (
    <div>
      <div id="navContainer">
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="myprofile" element={<ManageAccount />}/>
            </Switch>

            <Switch>
              <Route exact path="createnewpotion" element={<CreateNewPotion materials={materials}/>}/>
            </Switch>

            <Switch>
              <Route exact path="shopfront" element={<Shopfront potions={potions} getPotions={getPotions}/>}/>
            </Switch>

            <Switch>
              <Route exact path="viewinventory" element={<Inventory materials={materials} potions={potions}/>}/>
            </Switch>

            <Switch>
              <Route exact path="menu" element={<Menu materials={materials} potions={potions}/>}/>
            </Switch>

          </div>
        </BrowserRouter>
        </div>
    </div>

  );
}

export default Home;
