'use strict'

const store = require('../store')

const signUpSuccess = (response) => {
  console.log('you signed up!', response)
  $('#sign-up').modal('hide')
  // add visual que for user to see
}

const signUpError = (response) => {
  console.log('error', response.responseText)
  // add visual que for user to see
}

const signInError = () => {
  console.log('sign in error')
  // add visual que for user to see
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log('you signed in!', store.user)
  $('#sign-in').modal('hide')
  // add visual que for user to see
}

const changePasswordSuccess = (response) => {
  console.log('you successfully changed the password')
  $('#change-password').modal('hide')
}

const changePasswordError = (changePasswordError) => {
  console.log('changePasswordError is', changePasswordError)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccess,
  changePasswordSuccess,
  changePasswordError
}
