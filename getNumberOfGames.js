function getNumberOfGames(numberOfCommands) {
  let gamesForRaund = 0;
  let summOfGame = 0;
    while (numberOfCommands > 1) {
    if (numberOfCommands % 2 == 0) {
      gamesForRaund = numberOfCommands / 2;
      summOfGame += gamesForRaund;
      numberOfCommands = numberOfCommands / 2;
    } else {
      gamesForRaund = (numberOfCommands - 1) / 2;
      summOfGame += gamesForRaund;
      numberOfCommands = (numberOfCommands - 1) / 2 + 1;
    }
  } console.log(summOfGame)
  }