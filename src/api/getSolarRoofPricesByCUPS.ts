import { host } from './api'
import axios from 'axios'

export default async function getSolarRoofPricesByCUPS(cups: string) {
  return await axios.post(`${host}/api/solarRoof/prices/searchByCUPS`, { cups })
}
