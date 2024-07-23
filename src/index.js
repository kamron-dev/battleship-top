import { Player, ComputerPlayer } from "../battleship.js";
import { setPredeterminedShips, createAndReturnTableWithShips, makeMeMove, makeComputerMove } from "../DOMstuff.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");

setPredeterminedShips(me);
setPredeterminedShips(opponent);
myTable.appendChild(createAndReturnTableWithShips(me));
opponentsTable.appendChild(createAndReturnTableWithShips(opponent));
makeMeMove(opponent, me);
// makeComputerMove(opponent)

// console.log(computerMoves(opponent))


// console.log(computerMoves(opponent))


// console.log(computerMoves(opponent))
// console.log(opponent.movesMade)

