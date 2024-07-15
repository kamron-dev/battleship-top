import { Player, ComputerPlayer } from "../battleship.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");

const setPredeterminedShips = (player) => {
    player.board.setShipOnBoard(0, "I", 2);
    player.board.setShipOnBoard(1, "B", 2, "vertical");
    player.board.setShipOnBoard(3, "F", 4);
    player.board.setShipOnBoard(4, "A", 3);
    player.board.setShipOnBoard(5, "J");
    player.board.setShipOnBoard(7, "J");
    player.board.setShipOnBoard(7, "D");
    player.board.setShipOnBoard(8, "A", 2);
    player.board.setShipOnBoard(8, "F", 3);
    player.board.setShipOnBoard(9, "J");

};

const createAndReturnTableWithShips = (player) => {
    const tBody = document.createElement("tbody");  /// there should be only 1
    
    for (let i = 0; i < player.board.ObjBoard.length; i++) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-row", i);
        tr.classList.add("battlefield-row");
        tBody.appendChild(tr);

        for (let cell in player.board.ObjBoard[i]) {
            const td = document.createElement("td");
            td.setAttribute("data-row", i);
            td.setAttribute("data-column", cell);
            td.setAttribute("data-player", player.name)
            td.classList.add("battlefield-cell");
            if (player.board.ObjBoard[i][cell].length) td.classList.add("battlefield-cell-occupied");
            const div = document.createElement("div");
            div.classList.add("battlefield-cell-content");
            td.appendChild(div);
            tr.appendChild(td);
            

        };

    };
    return tBody;
};



const makeCellsWork = () => {
    const allCells = document.querySelectorAll(".battlefield-cell");
    const cellClickHandler = (event) => {
        const cell = event.currentTarget
        const player = cell.getAttribute("data-player") === "Computer" ? opponent : me;
        const row = cell.getAttribute("data-row");
        const column = cell.getAttribute("data-column");
        const isOccupied = cell.classList.length > 1;

        const handleAttack = (player, row, column, isOccupied, cell) => {
            if (isOccupied) {
                console.log(player.board.receiveAttack(row, column));
                if (player.board.ObjBoard[row][column].checkIfSunk()) console.log("The ship has sunk!");
                cell.classList.add("battlefield-cell-occupied-hit");
            } else {
                console.log(player.board.receiveAttack(row, column));
                console.log(player.board.missedShots);
                cell.classList.add("battlefield-cell-occupied-miss");
            }
        };
        handleAttack(player, row, column, isOccupied, cell);

        cell.removeEventListener("click", cellClickHandler);
    }
    allCells.forEach(cell => {
        cell.addEventListener("click", cellClickHandler);
    })
    
};

setPredeterminedShips(me);
setPredeterminedShips(opponent);
myTable.appendChild(createAndReturnTableWithShips(me));
opponentsTable.appendChild(createAndReturnTableWithShips(opponent));
makeCellsWork();


