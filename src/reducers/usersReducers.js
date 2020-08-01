const usersReducer = (state, action) => {
  switch(action.type){
    case 'login':
      return {
        logged: true,
        data: state.data
      }
    case 'logout':
      return {
        logged: false,
        data: null
      }
    default:
      return state;
  }
}

export default usersReducer;