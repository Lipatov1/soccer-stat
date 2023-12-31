import { API_URL, TOKEN } from './configs/api.config'
import axios from 'axios'

export const $axios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': TOKEN,
  },
})
