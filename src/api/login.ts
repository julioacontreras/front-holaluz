import { host } from './api'
import axios from 'axios'

export default async function login(email: string, password: string) {
  return await axios.post(`${host}/api/auth/login`, {email, password})
}
