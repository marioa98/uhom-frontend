import axios from "axios"

export default class PropertiesController{
  static index(page){
    return axios.get(`/properties?page=${page}`)
  }

  static show(uuid){
    return axios.get(`/properties/${uuid}`)
  }
}