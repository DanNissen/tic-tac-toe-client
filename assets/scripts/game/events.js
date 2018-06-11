'use strict'
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./api')
const gameUi = require('./ui')
const gameLogic = require('./game-logic')

const onClick = () => {
  const cellId = event.target.id
  if (gameLogic.isEmpty(cellId)) {
    gameLogic.markCell(cellId)
    gameLogic.checkForWin()
    gameLogic.switchPlayer()
  } else {
    gameLogic.moveNotAllowed()
  }
}

const onPlayAgain = () => {
  // console.log('user clicked play again')
  gameLogic.gameReset()
  $('#draw').modal('hide')
  $('#winner').modal('hide')
}

const onStartGame = () => {
  $('.game-board').css('visibility', 'visible')
}

module.exports = {
  onClick,
  onPlayAgain,
  onStartGame
}
