import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  //Dev
  baseURL: 'http://192.168.15.5:3000',
})

api.interceptors.request.use(async (config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api