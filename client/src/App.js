import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Transfer_Money from "./components/Transfer_Money";
import Home from "./components/Home";
import User from './components/User';
import Modal from './components/Modal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
       <Nav />
        <Switch>
           <Route path="/" exact component={Home} />
          <Route path="/transfer" exact component={Transfer_Money} />
          <Route path="/transfer/contact" exact component={Contact} />
          <Route path="/user" exact component={User} />
          <Route path="/history" exact component={Modal} />
          <Route component={Error} /> 
         </Switch> 
      </Router>
     </>  
  );
};

export default App;
