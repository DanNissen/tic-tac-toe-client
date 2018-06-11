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

module.exports = {
  winMessage,
  drawMessage
}
