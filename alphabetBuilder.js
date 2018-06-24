function cleanup(alphabet, letter, bestSeed) {
  for (var seed of alphabet.getSeeds(letter)) {
    if (seed === bestSeed) {
      continue
    }

    // remove surplus seeds
    // console.log(`Cleaning up ${seed.name}.`)
    // for (var seedLetter of seed.letterSet) {
    //   console.log(seedLetter, alphabet.getSeeds(seedLetter))
    // }

    var allLettersCoveredTwice = seed.everyLetters(seedLetter => alphabet.getSeeds(seedLetter).size > 1)

    if (allLettersCoveredTwice) {
      seed.everyLetters(seedLetter => console.log(seedLetter, alphabet.getSeeds(seedLetter).size, Array.from(alphabet.getSeeds(seedLetter)).map(seed => seed.name)) || true)
      console.log(`${seed.name} is unnecessary now that ${bestSeed.name} has been added.`)
      seed.letterSet.forEach(function (seedLetter) {
        var letterSeeds = alphabet.getSeeds(seedLetter)
        letterSeeds.delete(seed)
      })
      seed.used = false
      seed.dismissed = true
    }
  }
}

function processNextLetter(alphabet, bestSeed) {
  console.log(`Adding ${bestSeed.name}...`)

  for (var letter of bestSeed.letterSet) {
    alphabet.get(letter).found = true
    alphabet.addSeed(letter, bestSeed)

    cleanup(alphabet, letter, bestSeed)
  }

  bestSeed.used = true
}

function operate(alphabet, chooseBestSeed) {
  while (alphabet.some(x => !x.found)) {
    var bestSeed = chooseBestSeed(alphabet)
    if (!bestSeed) {
      console.log('bestSeed', bestSeed)
      break
    }

    processNextLetter(alphabet, bestSeed)
  }

  var usedSeeds = alphabet.vocabulary.filter(x => x.used)

  console.log(usedSeeds.map(x => {
    return {
      name: x.name,
      uniqueLetters: x.filterLetters(letter => alphabet.getSeeds(letter).size == 1)
    }
  }))

  console.log(`${alphabet.filter(z => z.found).length} letters found in ${usedSeeds.length} seeds.`)
}

module.exports = operate
