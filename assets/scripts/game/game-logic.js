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
  // console.log('sorry that is not allowed')
  // do something with ui to show user that the click is not allowed
  $('#error').modal('show')
}

const gameReset = () => {
  // reset the game
  $('.game-cells').text('.')
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.player = 'x'
}

const grabOverGamesX = (response) => {
  // console.log(store.player_x)
  return gameApi.getGameByUserOver()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesError)
}

// const grabOverGamesO = (response) => {
//   // console.log(store.player_o)
//   return gameApi.getGameByUserOver()
//     .then(gameUi.getGamesSuccess)
//     .catch(gameUi.getGamesError)
// }

const calculateWinsNumberX = () => {
  // console.log(store.games)
  let winCount = 0
  let checkValue = 'x'
  for (let i = 0; i < store.games.games.length; i++) {
    // console.log(store.player_x.email)
    // console.log(store.games.games[i].player_o)
    if (store.games.games[i].player_o === null) {
      checkValue = 'x'
    } else if (store.player_x.email === store.games.games[i].player_o.email) {
      checkValue = 'o'
    } else {
      checkValue = 'x'
    }
    if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[1] === checkValue && store.games.games[i].cells[2] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[5] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[6] === checkValue && store.games.games[i].cells[7] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[6] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[1] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[7] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[5] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[6] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    } else if (store.gameBoard.includes('') === false) {
      // console.log('not counted as a win', winCount)
      store.player_x.wins = winCount
      // console.log(store.player_x.wins)
    }
  }
}

// const calculateWinsNumberO = () => {
//   // console.log(store.games)
//   let winCountO = 0
//   let checkValue = 'x'
//   for (let i = 0; i < store.games.games.length; i++) {
//     // console.log(store.player_x.email)
//     // console.log(store.games.games[i].player_o)
//     if (store.games.games[i].player_o === null) {
//       checkValue = 'x'
//     } else if (store.player_o.email === store.games.games[i].player_o.email) {
//       checkValue = 'o'
//     } else {
//       checkValue = 'x'
//     }
//     if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[1] === checkValue && store.games.games[i].cells[2] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[5] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[6] === checkValue && store.games.games[i].cells[7] === checkValue && store.games.games[i].cells[8] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[6] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[1] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[7] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[5] === checkValue && store.games.games[i].cells[8] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[8] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[6] === checkValue) {
//       winCountO = winCountO + 1
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
//     } else if (store.gameBoard.includes('') === false) {
//       // console.log('not counted as a win', winCount)
//       store.player_o.wins = winCountO
//       // console.log(store.player_x.wins)
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
  grabOverGamesX,
  // grabOverGamesO,
  calculateWinsNumberX
  // calculateWinsNumberO
}
