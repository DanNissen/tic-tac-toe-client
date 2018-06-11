'use strict'
// const gameEvents = require('./events')
const gameUi = require('./ui')
const store = require('../store')

// gameboard is a 3x3 grid composed of 9 html divs
// divs are numbered 1-9 and are always in same placeholder
// gameboard can be represented by an array index 0-8
let gameBoard = ['', '', '', '', '', '', '', '', '']

// let player = 'x'

// check to see if cell is empty
const isEmpty = (cellId) => {
  // console.log('player', player, 'clicked on cell', cellId)
  if (gameBoard[(cellId - 1)] === '') {
    return true
  } else {
    return false
  }
}
// push value to array & mark cell
const markCell = (cellId) => {
  gameBoard[(cellId - 1)] = store.player
  $('#' + cellId).text(store.player)
  $('.game-cells').css('visibility', 'visible')
  console.log(gameBoard)
}

const switchPlayer = () => {
  if (store.player === 'x') {
    store.player = 'o'
  } else if (store.player === 'o') {
    store.player = 'x'
  }
}

const checkForWin = (currentPlayer) => {
  if (gameBoard[0] === store.player && gameBoard[1] === store.player && gameBoard[2] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[3] === store.player && gameBoard[4] === store.player && gameBoard[5] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[6] === store.player && gameBoard[7] === store.player && gameBoard[8] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[0] === store.player && gameBoard[3] === store.player && gameBoard[6] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[1] === store.player && gameBoard[4] === store.player && gameBoard[7] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[2] === store.player && gameBoard[5] === store.player && gameBoard[8] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[0] === store.player && gameBoard[4] === store.player && gameBoard[8] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard[2] === store.player && gameBoard[4] === store.player && gameBoard[6] === store.player) {
    gameUi.winMessage()
  } else if (gameBoard.includes('') === false) {
    gameUi.drawMessage()
  }
}

const moveNotAllowed = () => {
  console.log('sorry that is not allowed')
  // do something with ui to show user that the click is not allowed
}

const gameReset = () => {
  // reset the game
  $('.game-cells').text('.')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  store.player = 'x'
}

module.exports = {
  switchPlayer,
  gameBoard,
  checkForWin,
  // player,
  isEmpty,
  markCell,
  moveNotAllowed,
  gameReset
}
