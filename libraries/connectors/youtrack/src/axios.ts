import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://socialtech.myjetbrains.com/api/',
  headers: {
    Authorization: 'Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM',
  },
})
