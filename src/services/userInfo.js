import { useUserContext } from "../UserContext";
const user = JSON.parse(localStorage.getItem('user'))

export function useUserInfo(){
  const { user }  = useUserContext();
  return user
}

export const getNames = () => {
  return user.names
}

export const getSurnames = () => {
  return user.surnames
}