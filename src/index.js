import { Player, ComputerPlayer } from "../battleship.js";
import { setPredeterminedShips, createAndReturnTableWithShips, makeCellsWork } from "../DOMstuff.js";
import { computerMoves } from "../computerMoves.js";
const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");

setPredeterminedShips(me);
setPredeterminedShips(opponent);
myTable.appendChild(createAndReturnTableWithShips(me));
opponentsTable.appendChild(createAndReturnTableWithShips(opponent));
makeCellsWork(me, opponent);

console.log(computerMoves(opponent.board.missedShots))


