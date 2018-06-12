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
  store.player_x = response.user
  console.log('you signed in! Player X', store.player_x)
  $('#sign-in-x').modal('hide')
  // add visual que for user to see
  $('.player-x-change-password').css('visibility', 'visible')
  $('.player-x-log-out').css('visibility', 'visible')
  $('.player-x-sign-in').css('visibility', 'hidden')
  $('#player-x-info').text(store.player_x.email)
}
const signInSuccessO = (response) => {
  store.player_o = response.user
  console.log('you signed in! Player O', store.player_o)
  $('#sign-in-o').modal('hide')
  // add visual que for user to see
  $('.player-o-change-password').css('visibility', 'visible')
  $('.player-o-log-out').css('visibility', 'visible')
  $('.player-o-sign-in').css('visibility', 'hidden')
  $('#player-o-info').text(store.player_o.email)
}

const changePasswordSuccessX = (response) => {
  console.log('you successfully changed the password Player X')
  $('#change-password-x').modal('hide')
}
const changePasswordSuccessO = (response) => {
  console.log('you successfully changed the password Player O')
  $('#change-password-o').modal('hide')
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
const logOutSuccessO = (response) => {
  console.log('you successfully signed out Player O')
  $('#log-out-o').modal('hide')
  $('.player-o-change-password').css('visibility', 'hidden')
  $('.player-o-log-out').css('visibility', 'hidden')
  $('.player-o-sign-in').css('visibility', 'visible')
}

const logOutError = (logOutError) => {
  console.log('signOutError is', logOutError)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccessX,
  signInSuccessO,
  changePasswordSuccessX,
  changePasswordSuccessO,
  changePasswordError,
  logOutSuccessX,
  logOutSuccessO,
  logOutError
}
