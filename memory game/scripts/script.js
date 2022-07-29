const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

startGame()

function startGame() {
  initializeCards(game.createCards())
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard")
  gameBoard.innerHTML = ''
  cards.forEach(card => {
    let cardElement = document.createElement('div')
    cardElement.id = card.id
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon
    createCardContent(card, cardElement)
    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  })
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement)
  createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement('div')
  cardElementFace.classList.add(face)

  if (face === FRONT) {
    let iconElement = document.createElement('img')
    iconElement.classList.add(ICON)
    iconElement.src = "./assets/images/" + card.icon + ".png"

    cardElementFace.appendChild(iconElement)
  } else {
    cardElementFace.innerHTML = "&lt/&gt"
  }
  element.appendChild(cardElementFace)
}

function flipCard() {
  if (game.setCard(this.id)) {

    this.classList.add("flip")
    if (game.secondCard) {
      if (game.checkMatch()) {
        game.clearCards()
        if (game.checkGameOver()) {
          let gameOverlay = document.getElementById("gameOver")
          gameOverlay.style.display = 'flex'
        }
      } else {

        let firstCardView = document.getElementById(game.firstCard.id)
        let secondCardView = document.getElementById(game.secondCard.id)

        setTimeout(() => {
          firstCardView.classList.remove('flip')
          secondCardView.classList.remove('flip')
          game.unflipCards()
        }, 1000);
      }
    }

  }
}

function restart() {
  game.clearCards()
  startGame()
  let gameOverlay = document.getElementById("gameOver")
  gameOverlay.style.display = 'none'
}