import axios from "axios"

export default class PropertiesController{
  static index(page){
    return axios.get(`${axios.defaults.baseURL}/properties?page=${page}`)
  }

  static show(uuid){
    return axios.get(`${axios.defaults.baseURL}/properties/${uuid}`)
  }
}