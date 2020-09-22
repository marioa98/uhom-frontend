import { useHistory, useLocation } from "react-router-dom";

export default function useNavigation(type){
  const history = useHistory();
  
  const goTo = path => {
    const currentLocation = window.location.pathname;
    if(currentLocation !== path) setNavigation(history, path, type)
  }
  
  return goTo;
}

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

function setNavigation(history, path, type){
  switch(type){
    case 'replace':
      history.replace(path);
      break;
    default:
      history.push(path);
      break;
  }
}