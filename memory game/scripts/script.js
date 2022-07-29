const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs = [
  'bootstrap',
  'electron',
  'firebase',
  'html',
  'javascript',
  'jquery',
  'mongo',
  'node',
  'react',
  'css'
]
let cards = null

startGame()

function startGame() {
  cards = createCards(techs)
  shuffleCards(cards)
  initializeCards(cards)
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard")
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

function shuffleCards(cards) {
  let current = cards.length
  let random = 0

  while (current !== 0) {
    random = Math.floor(Math.random() * current)
    current--
    [cards[random], cards[current]] = [cards[current], cards[random]]
  }
}

function createCards(techs) {
  let cards = []
  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech))
  })
  return cards.flatMap(pair => pair)
}

function createPairFromTech(tech) {
  return [{
    id: createIdWithTech(tech),
    icon: tech,
    flipped: false
  }, {
    id: createIdWithTech(tech),
    icon: tech,
    flipped: false
  }]
}
function createIdWithTech(tech) {
  return tech + parseInt(Math.random() * 1000)
}

function flipCard() {
  this.classList.add("flip")
}