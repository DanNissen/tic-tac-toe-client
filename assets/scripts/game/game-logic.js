'use strict'
// const gameEvents = require('./events')
const gameUi = require('./ui')
const store = require('../store')
const gameApi = require('./api')

// gameboard is a 3x3 grid composed of 9 html divs
// divs are numbered 1-9 and are always in same placeholder
// gameboard can be represented by an array index 0-8
store.gameBoard = ['', '', '', '', '', '', '', '', '']
// check to see if cell is empty
const isEmpty = (cellId) => {
  // console.log('player', player, 'clicked on cell', cellId)
  if (store.gameBoard[(cellId - 1)] === '') {
    return true
  } else {
    return false
  }
}
// push value to array & mark cell
const markCell = (cellId) => {
  store.gameBoard[(cellId - 1)] = store.player
  $('#' + cellId).text(store.player)
  $('.game-cells').css('visibility', 'visible')
  // console.log(gameBoard)
}

const switchPlayer = () => {
  if (store.player === 'x') {
    store.player = 'o'
  } else if (store.player === 'o') {
    store.player = 'x'
  }
}

const checkForWin = (cellId) => {
  if (store.gameBoard[0] === store.player && store.gameBoard[1] === store.player && store.gameBoard[2] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[3] === store.player && store.gameBoard[4] === store.player && store.gameBoard[5] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[6] === store.player && store.gameBoard[7] === store.player && store.gameBoard[8] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[0] === store.player && store.gameBoard[3] === store.player && store.gameBoard[6] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[1] === store.player && store.gameBoard[4] === store.player && store.gameBoard[7] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[2] === store.player && store.gameBoard[5] === store.player && store.gameBoard[8] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[0] === store.player && store.gameBoard[4] === store.player && store.gameBoard[8] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard[2] === store.player && store.gameBoard[4] === store.player && store.gameBoard[6] === store.player) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
    gameUi.winMessage()
  } else if (store.gameBoard.includes('') === false) {
    gameApi.endGame(cellId)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameError)
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
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.player = 'x'
}

const grabOverGames = (response) => {
  console.log(store.player_x)
  gameApi.getGameByUserOver()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesError)
}

const test = () => {
  console.log('test log', store.games)
}

// const calculateWinsNumber = () => {
//   console.log(store.games)
//   let winCount = 0
//   for (let i = 0; i < store.games.length; i++) {
//     if (store.gameBoard[0] === store.player && store.gameBoard[1] === store.player && store.gameBoard[2] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[3] === store.player && store.gameBoard[4] === store.player && store.gameBoard[5] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[6] === store.player && store.gameBoard[7] === store.player && store.gameBoard[8] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[0] === store.player && store.gameBoard[3] === store.player && store.gameBoard[6] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[1] === store.player && store.gameBoard[4] === store.player && store.gameBoard[7] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[2] === store.player && store.gameBoard[5] === store.player && store.gameBoard[8] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[0] === store.player && store.gameBoard[4] === store.player && store.gameBoard[8] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard[2] === store.player && store.gameBoard[4] === store.player && store.gameBoard[6] === store.player) {
//       winCount = winCount + 1
//     } else if (store.gameBoard.includes('') === false) {
//       console.log('not counted as a win', winCount)
//     }
//   }
// }

module.exports = {
  switchPlayer,
  checkForWin,
  isEmpty,
  markCell,
  moveNotAllowed,
  gameReset,
  grabOverGames,
  test
  // calculateWinsNumber
}
