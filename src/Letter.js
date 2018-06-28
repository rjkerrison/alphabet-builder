class Letter {
  constructor(character, frequency) {
    this.character = character
    this.frequency = frequency
    this.found = false
    this.seeds = new Set([])
  }
}

module.exports = Letter
