import axios from 'axios'

const baseAPI = axios.create({
  baseURL: '//api.weatherapi.com/v1'
})

export const getForecast = async () => {
  const API_KEY = '63080e3a91434196938213538232909'
  const LOCATION = 'Lima'
  const res = await baseAPI.get(`/forecast.json?key=${API_KEY}&q=${LOCATION}&days=7`)
  return res.data
}