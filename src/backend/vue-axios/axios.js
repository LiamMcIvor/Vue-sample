import axios from 'axios'

const API_URL = process.env.API_URL || 'http://3.8.223.175:8181/VehicleManagement/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})