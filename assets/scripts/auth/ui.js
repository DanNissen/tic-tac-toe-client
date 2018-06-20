'use strict'

const store = require('../store')
const gameLogic = require('../game/game-logic')

const signUpSuccess = (response) => {
  // console.log('you signed up!', response)
  $('#sign-up-form')[0].reset()
  $('#sign-up').modal('hide')
  // add visual que for user to see
}

const signUpError = (response) => {
  // console.log('error', response.responseText)
  // add visual que for user to see
  $('#error').modal('show')
}

const signInError = () => {
  // console.log('sign in error')
  // $('.modal-body').text('Sorry, try again!')
  // add visual que for user to see
  $('#error').modal('show')
}

const signInSuccessX = (response) => {
  store.player_x = response.user
  // console.log('you signed in! Player X', store.player_x)
  $('#sign-in-x').modal('hide')
  // add visual que for user to see
  $('.player-x-change-password').css('visibility', 'visible')
  $('.player-x-log-out').css('visibility', 'visible')
  $('.start-game').css('visibility', 'visible')
  $('.player-x-sign-in').css('visibility', 'hidden')
  $('.player-x-sign-up').css('visibility', 'hidden')
  $('#player-x-info').text(store.player_x.email)
  $('#sign-in-x-form')[0].reset()
}

const changePasswordSuccessX = (response) => {
  // console.log('you successfully changed the password Player X')
  $('#change-password-x-form')[0].reset()
  $('#change-password-x').modal('hide')
}

const changePasswordError = (changePasswordError) => {
  // console.log('changePasswordError is', changePasswordError)
  $('#error').modal('show')
}

const logOutSuccessX = (response) => {
  // console.log('you successfully signed out')
  $('#log-out-x').modal('hide')
  $('.player-x-change-password').css('visibility', 'hidden')
  $('.player-x-log-out').css('visibility', 'hidden')
  $('.start-game').css('visibility', 'hidden')
  $('.player-x-sign-in').css('visibility', 'visible')
  $('.player-x-sign-up').css('visibility', 'visible')
  $('#player-x-info').text('')
  $('#player-x-wins').text('')
  $('#game-board').css('visibility', 'hidden')
  $('.game-cells').css('visibility', 'hidden')
  $('#whose-turn').text('')
}

const resetAllForms = () => {
  $('#change-password-x-form')[0].reset()
  $('#sign-in-x-form')[0].reset()
  $('#sign-up-form')[0].reset()
}
const logOutError = (logOutError) => {
  // console.log('signOutError is', logOutError)
  $('#error').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccessX,
  changePasswordSuccessX,
  changePasswordError,
  logOutSuccessX,
  logOutError,
  resetAllForms
}
