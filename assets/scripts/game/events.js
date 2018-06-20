'use strict'
const store = require('../store')

// const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./api')
const gameUi = require('./ui')
const gameLogic = require('./game-logic')

const onClick = () => {
  const cellId = event.target.id
  if (gameLogic.isEmpty(cellId)) {
    gameLogic.markCell(cellId)
    gameApi.updateGame(cellId)
      .then(gameUi.updateGameSuccess)
      .then(() => gameLogic.checkForWin(cellId))
      .then(gameLogic.switchPlayer)
      .catch(gameUi.updateGameError)
  } else {
    gameLogic.moveNotAllowed()
  }
}

const onPlayAgain = () => {
  gameLogic.gameReset()
  $('#draw').modal('hide')
  $('#winner').modal('hide')
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameError)
}

const onStartGame = () => {
  gameLogic.gameReset()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameError)
}

const onHideBoard = () => {
  gameLogic.gameReset()
  gameUi.hideBoard()
}

module.exports = {
  onClick,
  onPlayAgain,
  onStartGame,
  onHideBoard
}
