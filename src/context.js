import React, {createContext, useReducer} from "react";
import usersReducer from "./reducers/usersReducers";
import UsersController from "./controllers/UsersController";

const UserContext = createContext()
export default UserContext;

const initialUser = {
  logged: false,
  data: null
}

export function UserContextProvider(props){

  const [user, dispatch] = useReducer(usersReducer, initialUser);

  return(
    <UserContext.Provider value={{...user, handleSession: dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}