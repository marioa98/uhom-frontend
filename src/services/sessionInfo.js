export function useSessionInfo(){
  const session = JSON.parse(localStorage.getItem('session'));
  return session
}