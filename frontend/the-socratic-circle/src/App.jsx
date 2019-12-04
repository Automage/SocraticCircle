import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Panel from "./components/panel";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Panel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
