'use strict'
// const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('sign up form clicked')
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = (event) => {
  event.preventDefault()
  console.log('sign in form clicked')
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = (event) => {
  event.preventDefault()
  console.log('the change password form was submitted')
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onLogOut = (event) => {
  console.log('the log out button was clicked')
  event.preventDefault()
  authApi.logOut()
    .then(authUi.logOutSuccess)
    .catch(authUi.logOutError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onLogOut
}
