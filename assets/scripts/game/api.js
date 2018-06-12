'use strict'
const store = require('../store')
const config = require('../config')

const createGame = () => {
  console.log(store.player_x.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'games',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

const updateGame = (cellId) => {
  console.log('you triggered updateGame function')
  console.log(store.player_x.token)
  console.log((cellId - 1))
  console.log(store.player)
  console.log(store.player_x)
  console.log(store.player_o)
  const data = {
    'game': {
      'cell': {
        'index': (cellId - 1),
        'value': store.player
      },
      'over': false
    }
  }
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'games/' + store.game.id,
    headers: {
      'Authorization': 'Token token=' + store.player_x.token,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}

module.exports = {
  createGame,
  updateGame
}
