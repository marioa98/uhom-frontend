export const setLocalStorage = (res) => {
  const user = res.data
  const token = res.headers.authorization  
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("token", token)
}

export function refreshSession(dispatch){
  
  const currentUser = localStorage.getItem('user') || null
  const token = localStorage.getItem('token') || null
  
  if(currentUser && token){
    dispatch({
      type: 'LOGIN',
      payload: {
        headers: {
          authorization: token
        },
        data: currentUser
      }
    })
  }
}

export const clearLocalStorage = () => localStorage.clear();