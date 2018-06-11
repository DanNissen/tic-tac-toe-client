const winMessage = () => {
  $('#winner').modal('show')
}

const drawMessage = () => {
  $('#draw').modal('show')
}

module.exports = {
  winMessage,
  drawMessage
}
