export const getNames = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user.names
}