// const gameLogic = require('./game-logic')
const store = require('../store')

const winMessage = () => {
  $('#winner').modal('show')
  // console.log(store.player)
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

const updateGameSuccess = () => {
  console.log('game update successful')
}

const updateGameError = () => {
  console.log('game update failed')
}

module.exports = {
  winMessage,
  drawMessage,
  createGameSuccess,
  createGameError,
  updateGameSuccess,
  updateGameError
}
