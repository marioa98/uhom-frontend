const usersReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      const user = action.payload.data;
      const token = action.payload.headers.authorization;
      return {
        ...state,
        isLogged: true,
        user: user,
        token: token
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