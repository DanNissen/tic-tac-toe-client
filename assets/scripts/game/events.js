'use strict'
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./api')
const gameUi = require('./ui')
const gameLogic = require('./game-logic')

const onClick = () => {
  // console.log(store.player)
  const cellId = event.target.id
  if (gameLogic.isEmpty(cellId)) {
    gameLogic.markCell(cellId)
    gameApi.updateGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    // console.log(store.gameBoard)
    gameLogic.checkForWin()
    gameLogic.switchPlayer()
  } else {
    gameLogic.moveNotAllowed()
  }
}

const onPlayAgain = () => {
  console.log('user clicked play again')
  gameLogic.gameReset()
  $('#draw').modal('hide')
  $('#winner').modal('hide')
}

const onStartGame = () => {
  console.log('you have started a new game')
  store.player = 'x'
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameError)
}

module.exports = {
  onClick,
  onPlayAgain,
  onStartGame
}
