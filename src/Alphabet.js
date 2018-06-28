const Letter = require('./Letter')

function generateLetterDictionary(charA, charZ) {
  var a = {}
  var i = charA.charCodeAt(0)
  var j = charZ.charCodeAt(0)

  for (; i <= j; ++i) {
    var letter = new Letter(String.fromCharCode(i), 0)
    a[letter.character] = letter
  }

  return a
}

class Alphabet {
  constructor(vocabulary) {
    this.letters = generateLetterDictionary('a', 'z')
    this.vocabulary = vocabulary
    this._initFrequencies()
  }

  _initFrequencies() {
    for (var seed of this.vocabulary) {
      for (var letter of seed.letterSet) {
        this._increaseFrequency(letter)
      }
    }
  }

  _increaseFrequency(letter) {
    this.get(letter).frequency++
  }

  get(letter) {
    return this.letters[letter]
  }

  filter(filterFunction) {
    return Object.values(this.letters).filter(filterFunction)
  }

  some(someFunction) {
    return Object.values(this.letters).some(someFunction)
  }

  getSeeds(seedLetter) {
    return this.letters[seedLetter].seeds
  }

  addSeed(seedLetter, seed) {
    this.letters[seedLetter].seeds.add(seed)
  }
}

module.exports = Alphabet