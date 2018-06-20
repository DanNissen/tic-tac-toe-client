'use strict'
// const gameEvents = require('./events')
const gameUi = require('./ui')
const store = require('../store')
const gameApi = require('./api')

store.gameBoard = ['', '', '', '', '', '', '', '', '']

const isEmpty = (cellId) => {
  if (store.gameBoard[(cellId - 1)] === '') {
    return true
  } else {
    return false
  }
}

const markCell = (cellId) => {
  store.gameBoard[(cellId - 1)] = store.player
  $('#' + cellId).text(store.player)
  $('.game-cells').css('visibility', 'visible')
}

const switchPlayer = () => {
  if (store.player === 'x') {
    store.player = 'o'
  } else if (store.player === 'o') {
    store.player = 'x'
  }
  $('#whose-turn').text(`PLAYER ${store.player}'s TURN`)
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
  $('#error').modal('show')
}

const gameReset = () => {
  $('.game-cells').text('.')
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.player = 'x'
}

const grabOverGamesX = (response) => {
  return gameApi.getGameByUserOver()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesError)
}

const calculateWinsNumberX = () => {
  let winCount = 0
  let checkValue = 'x'
  store.player_x.wins = winCount
  for (let i = 0; i < store.games.games.length; i++) {
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
    } else if (store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[5] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[6] === checkValue && store.games.games[i].cells[7] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[3] === checkValue && store.games.games[i].cells[6] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[1] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[7] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[5] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[0] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[8] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.games.games[i].cells[2] === checkValue && store.games.games[i].cells[4] === checkValue && store.games.games[i].cells[6] === checkValue) {
      winCount = winCount + 1
      store.player_x.wins = winCount
    } else if (store.gameBoard.includes('') === false) {
      store.player_x.wins = winCount
    }
  }
}

module.exports = {
  switchPlayer,
  checkForWin,
  isEmpty,
  markCell,
  moveNotAllowed,
  gameReset,
  grabOverGamesX,
  calculateWinsNumberX
}
