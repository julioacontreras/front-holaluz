import { host } from './api'
import axios from 'axios'

export default async function logout() {
    return await axios.post(`${host}/api/auth/logout`)
}
