import React from "react";
import "./assets/styles/App.css";

import Navbar from "./components/smart/Navbar/Navbar";
import Routes from './routes/Routes'
import usersReducer from "./reducers/usersReducers"
import Footer from './components/dumb/Footer'
import { BrowserRouter } from "react-router-dom";

export const UserContext = React.createContext();
const initialUser = {
  isLogged: false,
  user: null,
  token: false
}

function App() {
  const [user, dispatch] = React.useReducer(usersReducer, initialUser)
  
  React.useEffect(() => {
    const currentUser = localStorage.getItem('user') || null
    const token = localStorage.getItem('token') || null

    if(currentUser && token){
      dispatch({
        type: 'LOGIN',
        payload: {
          headers: {
            authorization: token
          },
          data: currentUser
        }
      })
    }
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, dispatch}}>
        <Navbar />
        <Routes/>
        <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
