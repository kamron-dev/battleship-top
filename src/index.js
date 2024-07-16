import { Player, ComputerPlayer } from "../battleship.js";
import { setPredeterminedShips, createAndReturnTableWithShips, makeCellsWork } from "../DOMstuff.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");

setPredeterminedShips(me);
setPredeterminedShips(opponent);
myTable.appendChild(createAndReturnTableWithShips(me));
opponentsTable.appendChild(createAndReturnTableWithShips(opponent));
makeCellsWork(me, opponent);


const playGame = (() => {
    const mySide = document.querySelector(".player1");
    const computerSide = document.querySelector(".player2");
    

    // mySide.classList.add("disabled");
    
})();