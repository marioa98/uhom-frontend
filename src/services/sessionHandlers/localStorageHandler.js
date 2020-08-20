export const setLocalStorage = (res) => {
  const user = res.data
  const token = res.headers.authorization  
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("token", token)
}

export const clearLocalStorage = () => localStorage.clear();