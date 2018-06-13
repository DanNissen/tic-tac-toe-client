'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const gameLogic = require('../game/game-logic')
const store = require('../store')
// const gameApi = require('../game/api')

const onSignUp = (event) => {
  event.preventDefault()
  // console.log('sign up form clicked')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignInX = (event) => {
  event.preventDefault()
  // console.log('Player X sign in form clicked')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  authApi.signInX(data)
    .then(authUi.signInSuccessX)
    .then(gameLogic.grabOverGamesX)
    .then(gameLogic.calculateWinsNumberX)
    .then(() => $('#player-x-wins').text(`You have won ${store.player_x.wins} games!!`))
    .catch(authUi.signInError)
}
const onSignInO = (event) => {
  event.preventDefault()
  // console.log('Player O sign in form clicked')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  authApi.signInO(data)
    .then(authUi.signInSuccessO)
    .then(gameLogic.grabOverGamesO)
    .then(gameLogic.calculateWinsNumberO)
    .then(() => $('#player-o-wins').text(`You have won ${store.player_o.wins} games!!`))
    .catch(authUi.signInError)
}

const onChangePasswordX = (event) => {
  event.preventDefault()
  // console.log('the change password form for player x was submitted')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  authApi.changePasswordX(data)
    .then(authUi.changePasswordSuccessX)
    .catch(authUi.changePasswordError)
}
const onChangePasswordO = (event) => {
  event.preventDefault()
  // console.log('the change password form for player o was submitted')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  authApi.changePasswordO(data)
    .then(authUi.changePasswordSuccessO)
    .catch(authUi.changePasswordError)
}

const onLogOutX = (event) => {
  // console.log('the log out player x button was clicked')
  event.preventDefault()
  authApi.logOutX()
    .then(authUi.logOutSuccessX)
    .catch(authUi.logOutError)
}
const onLogOutO = (event) => {
  // console.log('the log out player o button was clicked')
  event.preventDefault()
  authApi.logOutO()
    .then(authUi.logOutSuccessO)
    .catch(authUi.logOutError)
}

module.exports = {
  onSignUp,
  onSignInX,
  onChangePasswordX,
  onLogOutX,
  onSignInO,
  onChangePasswordO,
  onLogOutO
}
