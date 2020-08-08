import axios from "axios";

const baseUri = "https://api.whatsapp.com/send?"
const defaultPhone = "5213121042284"
export default class AppoinmentsController {
  static send(message){
    return axios.post(`${baseUri}phone=${defaultPhone}&text=${message}`)
  }
}