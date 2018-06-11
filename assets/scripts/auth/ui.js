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

const signInSuccessX = (response) => {
  store.user = response.user
  console.log('you signed in!', store.user)
  $('#sign-in-x').modal('hide')
  // add visual que for user to see
  $('.player-x-change-password').css('visibility', 'visible')
  $('.player-x-log-out').css('visibility', 'visible')
  $('.player-x-sign-in').css('visibility', 'hidden')
}

const changePasswordSuccessX = (response) => {
  console.log('you successfully changed the password')
  $('#change-password-x').modal('hide')
}

const changePasswordError = (changePasswordError) => {
  console.log('changePasswordError is', changePasswordError)
}

const logOutSuccessX = (response) => {
  console.log('you successfully signed out')
  $('#log-out-x').modal('hide')
  $('.player-x-change-password').css('visibility', 'hidden')
  $('.player-x-log-out').css('visibility', 'hidden')
  $('.player-x-sign-in').css('visibility', 'visible')
}

const logOutError = (logOutError) => {
  console.log('signOutError is', logOutError)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccessX,
  changePasswordSuccessX,
  changePasswordError,
  logOutSuccessX,
  logOutError
}
