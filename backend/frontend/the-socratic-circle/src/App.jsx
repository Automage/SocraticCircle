import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Panel from "./components/panel";
import Login from "./components/login";
import Register from "./components/register";
import Submit from "./components/submit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/register" component={Register}>
          <Register />
        </Route>
        <Route path="/submit" component={Submit}>
          <Submit />
        </Route>
        <Route path="/">
          <Panel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
