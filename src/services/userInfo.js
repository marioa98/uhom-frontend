import React from "react";
import { useUserContext } from "../UserContext";
const user = JSON.parse(localStorage.getItem('user'))

export function useUserInfo(){
  const { user }  = useUserContext();
  return user
}