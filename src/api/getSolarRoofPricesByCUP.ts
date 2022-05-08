import { host } from './api'
import axios from 'axios'

export default async function getSolarRoofPricesByCUP(cups: string) {
  return await axios.post(`${host}/api/solarRoof/prices/searchByCUP`, { cups })
}
