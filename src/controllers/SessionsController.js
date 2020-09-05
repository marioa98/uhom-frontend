import axios from "axios"

export default class SessionsController{
  static login(data){
    return axios.post(`/login`, {user: {...data}})
  }

  static logout(token){
    const headers = {
      headers: {
        'Authorization': token
      }
    }
    return axios.delete(`/logout`, headers)
  }
}