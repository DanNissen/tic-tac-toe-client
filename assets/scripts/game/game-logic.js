'use strict'
const gameEvents = require('./events')

// gameboard is a 3x3 grid composed of 9 html divs
// divs are numbered 1-9 and are always in same placeholder
// gameboard can be represented by an array index 0-8
const gameBoard = ['', '', '', '', '', '', '', '', '']

let player = 'x'

// check to see if cell is empty
const isEmpty = (cellId) => {
  console.log('player', player, 'clicked on cell', cellId)
  if (gameBoard[(cellId - 1)] === '') {
    return true
  } else {
    return false
  }
}
// push value to array & mark cell
const markCell = (cellId) => {
  gameBoard[(cellId - 1)] = player
  $('#' + cellId).text(player)
  console.log(gameBoard)
}

const switchPlayer = () => {
  if (player === 'x') {
    player = 'o'
  } else if (player === 'o') {
    player = 'x'
  }
}

const checkForWin = () => {
  if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) {
    console.log(player, 'has won the game!!')
  } else if (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player) {
    console.log(player, 'has won the game!!')
  }
}

const moveNotAllowed = () => {
  console.log('sorry that is not allowed')
}

module.exports = {
  switchPlayer,
  gameBoard,
  checkForWin,
  player,
  isEmpty,
  markCell,
  moveNotAllowed
}
