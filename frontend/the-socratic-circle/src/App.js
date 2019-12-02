import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Panel from "./components/panel";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Panel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
