'use strict'
// const store = require('../store')
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

module.exports = {
  signUp,
  signIn
}
