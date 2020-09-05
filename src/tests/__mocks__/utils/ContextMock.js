import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { UserContextProvider } from "../../../UserContext";


export default function UserContextMock({children}){
  
  return(
    <BrowserRouter>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </BrowserRouter>
  )
}