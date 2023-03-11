import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://gitlab.example.com/api/v4/',
  headers: {
    Authorization: 'Bearer <token>',
  },
})
