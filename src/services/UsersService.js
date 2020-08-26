import UsersController from "../controllers/UsersController";

export default function getUser(uuid, token){
  const response = UsersController.show(uuid, token)
    .then(res => {
      if(res.status === 200){
        return {
          data: res.data
        }
      }
      return res;
    })
    .catch(err => ({err: err}))

  return response
}