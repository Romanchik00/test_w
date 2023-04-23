function getNumberOfGames() {
  let numberOfCommands = prompt("Введите количество команд (от 2 до 99)")
  let gamesForRaund = 0;
  let summOfGame = 0;
  if (numberOfCommands <= 1 || numberOfCommands >= 100) {
    alert("От 2 До 100 !!!");
    return(numberOfCommands);
  }
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
  } alert(summOfGame)
  }
