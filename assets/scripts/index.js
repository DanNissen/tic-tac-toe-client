'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  // player x
  $('#sign-in-x').on('submit', authEvents.onSignInX)
  $('#change-password-x').on('submit', authEvents.onChangePasswordX)
  $('#log-out-x').on('submit', authEvents.onLogOutX)
  // player o
  $('#sign-in-o').on('submit', authEvents.onSignInO)
  $('#change-password-o').on('submit', authEvents.onChangePasswordO)
  $('#log-out-o').on('submit', authEvents.onLogOutO)
  // gameBoard
  $('#game-board').click(gameEvents.onClick)
  $('#won-play-again').click(gameEvents.onPlayAgain)
  $('#draw-play-again').click(gameEvents.onPlayAgain)
  $('#start-game').click(gameEvents.onStartGame)
})
