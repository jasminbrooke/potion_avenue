import './App.css';
import CreateNewPotion from './CreateNewPotion';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
// import NavBar from './NavBar'



function App() {

  

  return (

    
    <div>
      <header>Hello!</header>
      

      {/* <div id="navContainer">
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="1" element={}/>
            </Switch>
            <Switch>
              <Route exact path="2" element={}/>
            </Switch>
            <Switch>
              <Route exact path="3" element={}/>
            </Switch>
            <Switch>
              <Route exact path="4" element={}/>
            </Switch>
          </div>
        </BrowserRouter> */}



      <CreateNewPotion />
    </div>
  );
}

export default App;
