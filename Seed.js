function getLetters(phrase) {
  phrase = phrase.toLowerCase()
  var letters = new Set(phrase.match(/[a-z]/g))
  return letters
}

class Seed {
  constructor(name, letterSet) {
    this.name = name
    this.letterSet = getLetters(name)
    this.used = false
    this.dismissed = false
  }

  filterLetters(filterFunction) {
    return Array.from(this.letterSet).filter(filterFunction)
  }

  everyLetters(everyFunction) {
    return Array.from(this.letterSet).every(everyFunction)
  }

  letterSetAverageScore(alphabet) {
    var score = 0
    var letters = 0
    for (var letter of this.letterSet) {
      if (!alphabet.get(letter).found) {
        score += alphabet.get(letter).frequency
        letters++
      }
    }

    return score/letters
  }

  letterSetCount(alphabet) {
    var letters = 0
    for (var letter of this.letterSet) {
      if (!alphabet.get(letter).found) {
        letters++
      }
    }

    return letters
  }
}

module.exports = Seed
