import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://socialtech.myjetbrains.com/api/',
  headers: {
    Authorization: 'Bearer <token>',
  },
})
