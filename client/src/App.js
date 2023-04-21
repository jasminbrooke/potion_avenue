import './App.css';
import CreateNewPotion from './CreateNewPotion';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from './NavBar'



function App() {

  return (
    <div>
      <div id="navContainer">
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="1" element={<CreateNewPotion />}/>
            </Switch>

            <Switch>
              <Route exact path="2" element={<CreateNewPotion />}/>
            </Switch>

            <Switch>
              <Route exact path="3" element={<CreateNewPotion />}/>
            </Switch>

            <Switch>
              <Route exact path="4" element={<CreateNewPotion />}/>
            </Switch>

          </div>
        </BrowserRouter>
        </div>


        <header>Hello!</header>

    </div>

  );
}

export default App;
