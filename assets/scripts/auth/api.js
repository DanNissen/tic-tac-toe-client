'use strict'
const store = require('../store')
const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: data
  })
}

const signInX = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: data
  })
}

const changePasswordX = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}

const logOutX = () => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}


module.exports = {
  signUp,
  signInX,
  changePasswordX,
  logOutX
}
