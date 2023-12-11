import axios from 'axios'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})


// Intercepta todos as response
httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Trando os erros para disparar somente quando temos tratados
    const canThrowAnError = error.request.status === 0 || error.request.status === 500

    // Apresenta os erros não tratados.
    if (canThrowAnError) {
      throw new Error(error.message)
    }


    return error
  }
)

export default {}
