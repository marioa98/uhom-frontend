import React from "react";
import "./assets/styles/App.css";

import Navbar from "./components/smart/Navbar/Navbar";
import Routes from './routes/Routes'
import UserContext from "./context"

function App() {
  return (
    <UserContext.Consumer>
      <Navbar />
      <Routes/>
    </UserContext.Consumer>
  );
}

export default App;
