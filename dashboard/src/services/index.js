import axios from 'axios'
import AuthService from './auth'
import UserService from './users'
import FeedbacksService from './feedbacks'
import router from '../router'
import { setGlobalLoading } from '../store/global'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

// Intercepta todos os requests
httpClient.interceptors.request.use((config) => {
  setGlobalLoading(true)
  // Enviando o token para todas as requisições
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

// Intercepta todos as response
httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false)
    return response
  },
  (error) => {
    // Trando os erros para disparar somente quando temos tratados
    const canThrowAnError = error.request.status === 0 || error.request.status === 500

    // Apresenta os erros não tratados.
    if (canThrowAnError) {
      setGlobalLoading(false)
      throw new Error(error.message)
    }

    // Se o token não for válido, volta para home
    if (error.response.status === 401) {
      router.push({ name: 'Home' })
    }

    setGlobalLoading(false)
    return error
  }
)

export default {
  auth: AuthService(httpClient),
  users: UserService(httpClient),
  feedbacks: FeedbacksService(httpClient)
}
