import SessionsController from "../../controllers/SessionsController"
const loginHandler = (data) => {
  SessionsController.login(data)
    .then(res => {
      let header = res.headers
      console.log(header)
    })
    .catch(err => console.log(err.response.data))
}

export default loginHandler