import axios from "axios";

export default class UsersController{
  static create(data){
    return axios.post(`/signin`, {user: {...data}})
  }

  static show(uuid, token){
    const headers = {
      headers: {
        'Authorization': token
      }
    }
    return axios.get(`/users/${uuid}`, headers)
  }
}