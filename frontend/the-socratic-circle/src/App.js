import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Panel from "./components/panel";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Panel />
    </React.Fragment>
  );
}

export default App;
