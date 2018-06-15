'use strict'
const store = require('../store')
const config = require('../config')

const signUp = (data) => {
  // console.log('data passed to api is', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: data
  })
}

const signInX = (data) => {
  // console.log('data passed to sign in api is', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: data
  })
}
// const signInO = (data) => {
//   // console.log('data passed to sign in api is', data)
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + 'sign-in',
//     data: data
//   })
// }

const changePasswordX = (data) => {
  // console.log('token is ', store.player_x.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}
// const changePasswordO = (data) => {
//   // console.log('token is ', store.player_o.token)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + 'change-password',
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.player_o.token
//     }
//   })
// }

const logOutX = () => {
  // console.log('token is ', store.player_x.token)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.player_x.token
    }
  })
}
// const logOutO = () => {
//   // console.log('token is ', store.player_o.token)
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + 'sign-out',
//     headers: {
//       Authorization: 'Token token=' + store.player_o.token
//     }
//   })
// }

module.exports = {
  signUp,
  signInX,
  changePasswordX,
  logOutX
  // signInO,
  // changePasswordO,
  // logOutO
}
