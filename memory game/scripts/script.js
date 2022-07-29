const FRONT = "card_front"
const BACK = "card_back"

let techs = [
  'bootstrap',
  'electron',
  'firebase',
  'html',
  'javascript',
  'jquery',
  'mongo',
  'node',
  'react'
]
let cards = null

startGame()

function startGame() {
  cards = createCards(techs)
  shuffleCards(cards)
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
  for (const tech of techs) {
    cards.push(createPairFromTech(tech))
  }
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