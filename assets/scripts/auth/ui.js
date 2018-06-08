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

module.exports = {
  signUpSuccess,
  signUpError
}
