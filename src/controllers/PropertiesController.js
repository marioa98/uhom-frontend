import axios from "axios"

export default class PropertiesController{
  static index(path, userId){
    return axios.get(path, { params: {user_id: userId} })
  }

  static show(uuid, userId=null){
    return axios.get(`/properties/${uuid}`, { params: {user_id: userId} })
  }
}