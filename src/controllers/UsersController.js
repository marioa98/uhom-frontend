import axios from "axios";

export default class UsersController{
  static create(data){
    let userData = {
      user: {...data}
    }
    return axios.post(`${axios.defaults.baseURL}/signin`, {user: {...data}})
  }
}