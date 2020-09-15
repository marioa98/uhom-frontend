import axios from "axios";

export default class LikesController{
  static like(authorization, propertyId, userId){
    const params = setParams(authorization, propertyId, userId);
    return axios.post(`/properties/${propertyId}/like`)
  }
}

function setParams(authorization, propertyId, userId){
  return {
    headers: {
      Authorization: authorization
    },
    body: {
      session_id: userId,
      property_id: propertyId
    }
  }
}