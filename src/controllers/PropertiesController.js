import axios from "axios"

export default class PropertiesController{
  static index(path, params){
    return axios.get(path, { params })
  }

  static show(uuid){
    return axios.get(`/properties/${uuid}`)
  }
}