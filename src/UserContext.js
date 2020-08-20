import React, { useEffect } from "react"
import usersReducer from "./reducers/usersReducers";

const UserContext = React.createContext();
const UserContextDispatch = React.createContext();

const initialUser = {
  isLogged: false,
  user: null,
  token: false
}

export function UserContextProvider({children}){

  const [user, dispatch] = React.useReducer(usersReducer, initialUser);
  
  useEffect(() => {
    
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
  
  return(
    <UserContext.Provider value={user}>
      <UserContextDispatch.Provider value={dispatch}>
        {children}
      </UserContextDispatch.Provider>
    </UserContext.Provider>
  )

}

export function useUserContext(){
  const context = React.useContext(UserContext);

  if(context === undefined) throw new Error('useUserContext debe de usarse con UserContextProvider')
  return context;
}

export function useUserDispatch(){
  const context = React.useContext(UserContextDispatch);
  if(context === undefined) throw new Error('useUserDispatch debe de usarse con UserContextProvider')
  return context;
}