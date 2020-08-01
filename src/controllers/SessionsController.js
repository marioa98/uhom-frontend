import axios from "axios"
import { getToken } from "../services/sessionHandlers/authService";

export default class SessionsController{
  static login(data){
    return axios.post(`${axios.defaults.baseURL}/login`, {user: {...data}})
  }

  static logout(){
    return axios.delete(`${axios.defaults.baseURL}/logout`, { headers: { "Authorization": getToken()}})
  }
}