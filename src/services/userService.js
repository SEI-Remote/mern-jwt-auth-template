import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/users'

async function getAllUsers() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export { getAllUsers }
