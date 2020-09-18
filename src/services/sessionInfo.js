import { useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { setSessionItem } from "./sessionHandlers/localStorageHandler";

export function useSessionInfo(){
  const session = JSON.parse(localStorage.getItem('session'));
  return session
}

const getSessionItem = () => JSON.parse(localStorage.getItem('session'))