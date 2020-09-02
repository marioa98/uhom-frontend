import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/General/divs.css";

import Navbar from "./components/smart/Navbar/Navbar";
import Routes from './routes/Routes'
import Footer from './components/dumb/Footer'
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar>
          <div className="body-container">
            <div className="content">
              <Routes/>
            </div>                
            <Footer/>
          </div>
        </Navbar>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
