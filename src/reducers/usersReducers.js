const usersReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      const sessionInfo = action.payload.sessionInfo
      return {
        ...state,
        isLogged: true,
        sessionInfo: sessionInfo
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
        user: null
      }
    default:
      return state;
  }
}

export default usersReducer;