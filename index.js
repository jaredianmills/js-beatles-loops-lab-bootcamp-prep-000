function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
  var lennonFactsArray = [];
  var i = 0
  while (i < facts.length) {
    lennonFactsArray.push(`${facts[i]}!!!`);
    i++;
  }
  return lennonFactsArray;
}

function iLoveTheBeatles()
