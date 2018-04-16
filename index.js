function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
  var lennonFactsArray = [];
  var i = facts.length;
  while (i > 0) {
    lennonFactsArray.push(`${facts[i]}!!!`);
    facts.length--;
  }
  return lennonFactsArray;
}
