import UsersController from "../../controllers/UsersController"

const signinHandler = (data) => {
  UsersController.create(data)
      .then(res => {console.log(res)})
      .catch(errors => {
        let errorMessages = errors.response.data.details
        console.log(errorMessages);
      })
}

export default signinHandler;