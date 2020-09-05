import axios from "axios"

export default class PropertiesController{
  static index(path){
    return axios.get(path)
  }

  static show(uuid){
    return axios.get(`/properties/${uuid}`)
  }
}