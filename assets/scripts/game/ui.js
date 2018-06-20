// const gameLogic = require('./game-logic')
const store = require('../store')
// const gameApi = require('./api')

const winMessage = () => {
  $('#winner').modal('show')
  $('#winning-player').text(`Winner is ${store.player}`)
  store.player_x.wins++
  $('#player-x-wins').text(`You have won ${store.player_x.wins} games!!`)
}

const drawMessage = () => {
  $('#draw').modal('show')
}

const createGameSuccess = (response) => {
  $('.game-board').css('visibility', 'visible')
  $('.game-cells').css('visibility', 'visible')
  store.game = response.game
  $('#whose-turn').text(`PLAYER ${store.player}'s TURN`)
  $('#game-messages').text('')
}

const createGameError = (createGameError) => {
  $('#error').modal('show')
}

const updateGameSuccess = (response) => {
  // $('#game-messages').text(`Move saved successfully`)
}

const updateGameError = () => {
  $('#error').modal('show')
}

const getGamesSuccess = (response) => {
  store.games = response
}

const getGamesError = (response) => {
  $('#error').modal('show')
}

const hideBoard = () => {
  $('#game-board').css('visibility', 'hidden')
  $('.game-cells').css('visibility', 'hidden')
  $('#whose-turn').text('')
  $('#game-messages').text('Please click start game to play')
}

module.exports = {
  winMessage,
  drawMessage,
  createGameSuccess,
  createGameError,
  updateGameSuccess,
  updateGameError,
  getGamesSuccess,
  getGamesError,
  hideBoard
}
