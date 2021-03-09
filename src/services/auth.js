export const getToken = () => localStorage.getItem('jwt')
export const login = (token) => {
  localStorage.setItem('jwt', token)
}
export const logout = () => {
  localStorage.removeItem('jwt')
}

export const isAuthenticated = () => localStorage.getItem('jwt') !== null