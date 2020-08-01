import SessionsController from "../../controllers/SessionsController"
const loginHandler = (data) => {
  SessionsController.login(data)
    .then(async res => {
      const JWT_TOKEN = res.headers.authorization;
      const CURRENT_USER = res.data;
      await setLocalStorage(JWT_TOKEN, CURRENT_USER);
    })
    .catch(err => console.log(err))
}

export const getToken = () => {
  return localStorage.getItem('authToken')
}

const setLocalStorage = (JWT_TOKEN, CURRENT_USER) => {
  localStorage.setItem('authToken', JWT_TOKEN);
  localStorage.setItem('currentUser', JSON.stringify(CURRENT_USER));
}

export default loginHandler