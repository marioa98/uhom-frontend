import React from "react";
import "./assets/styles/App.css";

import Navbar from "./components/smart/Navbar";

import Routes from './routes/Routes'

function App() {
  return (
    <>
      <Navbar />
      <Routes/>
    </>
  );
}

export default App;
