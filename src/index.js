import { Player, ComputerPlayer } from "../battleship.js";
import { setPredeterminedShips, createAndReturnTableWithShips, makeMeMove } from "../DOMstuff.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");
const randomizeShipplacementBtn = document.querySelector("#randomize-btn");


me.board.setShipsRandomly([4, 3, 3, 2, 2, 2, 1, 1, 1, 1,]);
myTable.appendChild(createAndReturnTableWithShips(me));
opponent.board.setShipsRandomly([4, 3, 3, 2, 2, 2, 1, 1, 1, 1,]);
opponentsTable.appendChild(createAndReturnTableWithShips(opponent));
makeMeMove(opponent, me);

