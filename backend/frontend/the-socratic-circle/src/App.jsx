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
    <React.Fragment>
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
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          Development Build:
          <a href="https://github.com/Automage/SocraticCircle"> Source Code</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
