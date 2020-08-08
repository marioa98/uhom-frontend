import axios from "axios";

export default class UsersController{
  static create(data){
    return axios.post(`/signin`, {user: {...data}})
  }
}