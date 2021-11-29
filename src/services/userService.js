import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {})
  .then(res => res.json())
}

export {
  getAllUsers
}