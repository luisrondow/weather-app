import { api } from 'src/services/api'

export function useApi(endpoint: string) {
  return {
    get: async () => {
      const response = await api.get(`${endpoint}&appid=${process.env.REACT_APP_API_KEY}`)
      return response
    },
  }
}
