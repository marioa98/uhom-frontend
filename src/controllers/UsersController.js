import axios from "axios";

function setAuthorizationHeaders(token){
  return{
    headers: {
      'Authorization': token
    }
  }
}

function setUserParams(data){
  return {
    user: {...data}
  }
}

export default class UsersController{
  static create(data){
    return axios.post(`/signin`, {user: {...data}})
  }

  static update(uuid, data, token){
    const headers = setAuthorizationHeaders(token)
    const userParams = setUserParams(data);

    return axios.patch(`/users/${uuid}`, {...userParams}, {...headers})
  }
}