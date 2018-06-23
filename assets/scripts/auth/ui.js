'use strict'

const store = require('../store')
const gameLogic = require('../game/game-logic')

const signUpSuccess = (response) => {
  $('#sign-up-form')[0].reset()
  $('#sign-up').modal('hide')
  $('#success').modal('show')
  $('#success-message').text('Welcome! You have successfully registered. Please sign in to continue!')
}

const signUpError = (response) => {
  $('#error').modal('show')
  $('#sign-up-form')[0].reset()
}

const signInError = () => {
  $('#error').modal('show')
  $('#sign-in-x-form')[0].reset()
}

const signInSuccessX = (response) => {
  store.player_x = response.user
  $('#sign-in-x').modal('hide')
  $('.player-x-change-password').css('visibility', 'visible')
  $('.player-x-log-out').css('visibility', 'visible')
  $('.start-game').css('visibility', 'visible')
  $('.player-x-sign-in').css('visibility', 'hidden')
  $('.player-x-sign-up').css('visibility', 'hidden')
  $('#player-x-info').text(store.player_x.email)
  $('#game-messages').text('Please click start game to play')
  $('#sign-in-x-form')[0].reset()
}

const changePasswordSuccessX = (response) => {
  $('#change-password-x-form')[0].reset()
  $('#change-password-x').modal('hide')
  $('#success').modal('show')
  $('#success-message').text('Congrats, password changed successfully!')
}

const changePasswordError = (changePasswordError) => {
  $('#error').modal('show')
  $('#change-password-x-form')[0].reset()
}

const logOutSuccessX = (response) => {
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
  $('#game-messages').text('')

}

const resetAllForms = () => {
  $('#change-password-x-form')[0].reset()
  $('#sign-in-x-form')[0].reset()
  $('#sign-up-form')[0].reset()
}
const logOutError = (logOutError) => {
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
