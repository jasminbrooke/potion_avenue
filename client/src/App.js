import './App.css';
import CreateNewPotion from './CreateNewPotion';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from './NavBar'
import UserHome from './UserHome';
import { useEffect, useState } from "react"
import Inventory from './Inventory';
import Shopfront from './Shopfront';


function App() {
  const [materials, setMaterials] = useState([])

  useEffect(() => {
      getMaterials()
    }, [])

  const getMaterials = () => {
      fetch('/materials')
      .then(response => response.json())
      .then(data => {
        setMaterials(data);
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
              <Route exact path="myprofile" element={<UserHome />}/>
            </Switch>

            <Switch>
              <Route exact path="createnewpotion" element={<CreateNewPotion materials={materials}/>}/>
            </Switch>

            <Switch>
              <Route exact path="shopfront" element={<Shopfront />}/>
            </Switch>

            <Switch>
              <Route exact path="viewinventory" element={<Inventory materials={materials}/>}/>
            </Switch>

          </div>
        </BrowserRouter>
        </div>


        <header>Hello!</header>

    </div>

  );
}

export default App;
