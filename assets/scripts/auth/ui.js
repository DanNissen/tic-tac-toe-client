'use strict'

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
  console.log('you signed in!', response)
  $('#sign-in').modal('hide')
  // add visual que for user to see
}
module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccess
}
