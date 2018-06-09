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

module.exports = {
  onClick
}
