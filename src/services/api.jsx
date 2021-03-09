import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  //local
  //baseURL: 'http://192.168.0.11:3388',

  //casa Dani
  //baseURL : 'http://192.168.15.83:3388'

  //baseURL: 'http://192.168.0.12:3388',

  //Teste
  //baseURL: 'http://162.214.54.8:3383',

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