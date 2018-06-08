'use strict'
const store = require('../store')
const config = require('../config')

const signUp = (data) => {
  console.log('data passed to api is', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: data
  })
}

const signIn = (data) => {
  console.log('data passed to sign in api is', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: data
  })
}

const changePassword = (data) => {
  console.log('token is ', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const logOut = () => {
  console.log('token is ', store.user.token)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  logOut
}
