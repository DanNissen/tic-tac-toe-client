// const gameLogic = require('./game-logic')
const store = require('../store')
// const gameApi = require('./api')

const winMessage = () => {
  $('#winner').modal('show')
  $('#winning-player').text(`Winner is ${store.player}`)
}

const drawMessage = () => {
  $('#draw').modal('show')
}

const createGameSuccess = (response) => {
  console.log('you successfully created a game!', response)
  $('.game-board').css('visibility', 'visible')
  store.game = response.game
  console.log(store.game)
}

const createGameError = (createGameError) => {
  console.log('that was not successful try again')
}

const updateGameSuccess = (response) => {
  console.log('game update successful', response)
}

const updateGameError = () => {
  console.log('game update failed')
}

const getGamesSuccess = (response) => {
  console.log('response it', response)
  store.games = response
  console.log('you successfully got the games', store.games)
}

const getGamesError = (response) => {
  console.log('you did not get the games', response)
}

module.exports = {
  winMessage,
  drawMessage,
  createGameSuccess,
  createGameError,
  updateGameSuccess,
  updateGameError,
  getGamesSuccess,
  getGamesError
}
