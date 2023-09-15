import { API_URL } from "./configs/api.config";
import axios from 'axios'

export const $axios = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '3b3f27cbf820437fbb9f54d652841001',
    },
})
