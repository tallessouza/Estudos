let game = {

  lockMode: false,
  firstCard: null,
  secondCard: null,

  setCard: function (id) {
    let card = this.cards.filter(card => card.id === id)[0]
    if (card.flipped || this.lockMode) {
      return false
    }

    if (!this.firstCard) {
      this.firstCard = card
      this.firstCard.flipped = true
      return true
    } else {
      this.secondCard = card
      this.secondCard.flipped = true

      this.lockMode = true
      return true
    }

  },
  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) {
      return false
    }
    return this.firstCard.icon === this.secondCard.icon
  },
  clearCards: function () {
    this.firstCard = null
    this.secondCard = null
    this.lockMode = false
  },

  techs: [
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
  ],
  cards: null,

  createPairFromTech: function (tech) {
    return [{
      id: this.createIdWithTech(tech),
      icon: tech,
      flipped: false
    }, {
      id: this.createIdWithTech(tech),
      icon: tech,
      flipped: false
    }]
  },
  createIdWithTech: (tech) => tech + parseInt(Math.random() * 1000),
  createCards: function () {
    this.cards = []
    this.techs.forEach((tech) => {
      this.cards.push(this.createPairFromTech(tech))
    })
    this.cards = this.cards.flatMap(pair => pair)
    this.shuffleCards()
    return this.cards;
  },
  shuffleCards: function () {
    let current = this.cards.length
    let random = 0

    while (current !== 0) {
      random = Math.floor(Math.random() * current)
      current--;
      [this.cards[random], this.cards[current]] = [this.cards[current], this.cards[random]]
    }
  },
  unflipCards: function () {
    this.firstCard.flipped = false
    this.secondCard.flipped = false
    this.clearCards()
  },
  checkGameOver() {
    return this.cards.filter(card => !card.flipped).length == 0
  }
}