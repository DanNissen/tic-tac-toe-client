// gameboard is a 3x3 grid composed of 9 html divs
// divs are numbered 1-9 and are always in same placeholder
// gameboard can be represented by an array index 0-8

let gameBoard = ['', '', '', '', '', '', '', '', '']

// if the board is clicked we want to push a value of x or o to the array
// depending on who clicks determines which letter
// create players

const playerX = {}
const playerO = {}

// set current player

let currentPlayer = playerX

// function to determine whose turn it is
