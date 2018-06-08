'use strict'
// const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./api')
const gameUi = require('./ui')

// gameboard is a 3x3 grid composed of 9 html divs
// divs are numbered 1-9 and are always in same placeholder
// gameboard can be represented by an array index 0-8
const gameBoard = ['', '', '', '', '', '', '', '', '']
// if the board is clicked we want to push a value of x or o to the array
// depending on who clicks determines which letter
// create players
const player = 'x'

const onClick = () => {
  const cellId = event.target.id
  console.log('player', player, 'clicked on cell', cellId)
  // push value to array
  gameBoard[(cellId - 1)] = player
  console.log(gameBoard)
}

module.exports = {
  onClick
}
