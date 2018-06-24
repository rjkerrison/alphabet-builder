function randomChoice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function chooseByMostLetters(alphabet) {
  var possibleSeeds = alphabet.vocabulary.filter(x => !x.used && !x.dismissed)
  var bestSeed = possibleSeeds.sort((a,b) => b.letterSetCount(alphabet) - a.letterSetCount(alphabet))[0]
  return bestSeed
}

function chooseByLowestAverageFrequency(alphabet) {
  var nextLetter = alphabet.filter(l => !l.found).sort((a,b) => a.frequency - b.frequency)[0]
  var possibleSeeds = alphabet.vocabulary.filter(x => !x.used && !x.dismissed && x.letterSet.has(nextLetter.character))
  var bestSeed = possibleSeeds.sort((a,b) => a.letterSetAverageScore(alphabet) - b.letterSetAverageScore(alphabet))[0]
  return bestSeed
}

function chooseByRandom(alphabet) {
  var possibleSeeds = alphabet.vocabulary.filter(x => !x.used && !x.dismissed)
  var bestSeed = randomChoice(possibleSeeds)
  return bestSeed
}

module.exports = {
  chooseByMostLetters: chooseByMostLetters,
  chooseByLowestAverageFrequency: chooseByLowestAverageFrequency,
  chooseByRandom: chooseByRandom
}
