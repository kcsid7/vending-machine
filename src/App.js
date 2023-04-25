import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import VendingMachine from './components/VendingMachine';
import Cola from "./components/snacks/Cola";
import Cookies from "./components/snacks/Cookies";
import Chips from "./components/snacks/Chips";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          exact 
          Component={VendingMachine}
        />
        <Route 
          path="/cola" 
          exact 
          Component={Cola}
        />
        <Route 
          path="/chips" 
          exact 
          Component={Chips}
        />
        <Route 
          path="/cookies" 
          exact 
          Component={Cookies}
        />


        {/* <Route path="/cola" exact>
          <Cola />
        </Route>
        <Route path="/cookies" exact>
          <Cookies />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
