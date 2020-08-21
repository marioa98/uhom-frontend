export function useUserInfo(){
  const user = JSON.parse(localStorage.getItem('user'));
  return user
}