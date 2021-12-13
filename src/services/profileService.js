import * as tokenService from '../services/tokenService'

const BASE_URL = '/api/profiles'

async function getAllProfiles() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export { getAllProfiles }