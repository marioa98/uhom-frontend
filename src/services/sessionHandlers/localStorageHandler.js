export const setLocalStorage = (res) => {
  const user = JSON.stringify(res.data)
  const token = res.headers.authorization
  localStorage.setItem("user", user)
  localStorage.setItem("token", token)
}

export const clearLocalStorage = () => localStorage.clear();