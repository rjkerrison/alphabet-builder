const choosers = require('./choosers')
const operate = require('./alphabetBuilder')

module.exports = {
  buildByMostLetters: alphabet => operate(alphabet, choosers.chooseByMostLetters),
  buildByLowestAverageFrequency: alphabet => operate(alphabet, choosers.chooseByLowestAverageFrequency),
  buildByRandom: alphabet => operate(alphabet, choosers.chooseByRandom)
}
