import axios from "axios";
import { setHeaders, setUserParams } from "./requestFormatter";
export default class UsersController{
  static create(user){
    return axios.post(`/signin`, setUserParams(user))
  }

  static update(uuid, user, token){
    return axios.patch(`/users/${uuid}`, setUserParams(user), setHeaders(token))
  }
}