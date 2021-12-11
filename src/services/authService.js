import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(json => {
    if (json.token) {
      tokenService.setToken(json.token) 
    }
    if (json.err) {
      throw new Error(json.err)
    }
  })
  .catch(err => {
    throw err
  })
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

function login(credentials) {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.ok) return res.json()
    throw new Error('Bad credentials!')
  })
  .then(({ token }) => tokenService.setToken(token))
  .catch(err => {
    throw err
  })
}

export {
  signup,
  getUser,
  logout,
  login
}
