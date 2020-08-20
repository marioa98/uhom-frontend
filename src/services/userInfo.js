const user = JSON.parse(localStorage.getItem('user'))

export const getNames = () => {
  return user.names
}

export const getSurnames = () => {
  return user.surnames
}