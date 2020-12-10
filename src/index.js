const choosers = require('./choosers')
const operate = require('./alphabetBuilder')

const Alphabet = require('./Alphabet')
const Seed = require('./Seed')

function stringArrayToAlphabet(stringArray) {
  return new Alphabet(stringArray.map((x) => new Seed(x)))
}

const seeds = stringArrayToAlphabet([
  `Robin wrote this program whose very intention is just to examine a list of` +
    ' strings to quickly determine which is best at generating an alphabet.',
  ' which just provides numerous executable algorithms for quickly analyzing sentences.',
  ' It gives the user a quick summary of which string covers' +
    '  the entire alphabet with the least duplication.',
  `The quick brown fox jumps over the lazy dog.`,
  `What happens here? Can it go and quickly realize the alphabet from just one string?`,
])

const buildByMostLetters = (alphabet) =>
  operate(alphabet, choosers.chooseByMostLetters)

const buildByLowestAverageFrequency = (alphabet) =>
  operate(alphabet, choosers.chooseByLowestAverageFrequency)

buildByMostLetters(seeds)
buildByLowestAverageFrequency(seeds)

module.exports = {
  buildByMostLetters: buildByMostLetters,
  buildByLowestAverageFrequency: (alphabet) =>
    operate(alphabet, choosers.chooseByLowestAverageFrequency),
  buildByRandom: (alphabet) => operate(alphabet, choosers.chooseByRandom),
  stringArrayToAlphabet: stringArrayToAlphabet,
}
