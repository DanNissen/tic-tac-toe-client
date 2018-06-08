'use strict'
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('sign up form clicked')
  const data = getFormFields(event.target)
  console.log('data is', data)
}

module.exports = {
  onSignUp
}
