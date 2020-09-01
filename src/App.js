import React from "react";
import "./assets/styles/App.css";

import Navbar from "./components/smart/Navbar/Navbar";
import Routes from './routes/Routes'
import Footer from './components/dumb/Footer'
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import { Grid } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar>
          <Routes/>
          <Footer/>
        </Navbar>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
