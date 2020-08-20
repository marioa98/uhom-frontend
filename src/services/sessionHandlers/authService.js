import SessionsController from "../../controllers/SessionsController"
import {setLocalStorage, clearLocalStorage} from "../../services/sessionHandlers/localStorageHandler"

const loginHandler = (data, dispatch) => SessionsController.login(data)
    .then(res => {
      if(res.status == 200){
        setLocalStorage(res)
        dispatch({
          type: 'LOGIN',
          payload: res
        })
        return res;
      }
    })
  .catch(err => err.response)

export const logoutHandler = (token, dispatch) => {
  SessionsController.logout(token)
    .then(res => {
      if(res.status === 200){
        clearLocalStorage();
        dispatch({
          type: 'LOGOUT'
        })
      }
    })
}

export default loginHandler