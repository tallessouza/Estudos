document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    square.addEventListener('click', handleClick)
  })
})
function handleClick(e) {
  let square = e.target
  let position = square.id
  if (handleMove(position)) {
    setTimeout(() => {

      alert("Game Over")
    }, 10)
  }
  render(position)
}
function render(position) {
  let square = document.getElementById(position.toString())
  let squares = document.querySelectorAll(".square")
  let symbol = board[position]

  if (symbol != '') {
    square.innerHTML = `<div class=${symbol}></div>`
  }

  if (gameOver) {
    board = ['', '', '', '', '', '', '', '', '']
    playerTurn = 0
    gameOver = false

    squares.forEach((square) => {
      square.innerHTML = ''
    })
  }
}