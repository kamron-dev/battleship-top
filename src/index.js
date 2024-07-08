import { Player, ComputerPlayer, Ship, GameBoard } from "../battleship.js";

const myDiv = document.querySelector(".player1");
const opponentsDiv = document.querySelector(".player2");
const me = Player();
const opponent = ComputerPlayer();

// me.board.setShipOnBoard(1, "A", 1);
// me.board.setShipOnBoard(1, "A", 3, "horizontal");

const renderGrid = (player) => {
    const grid = document.createElement("table");
    grid.classList.add("board-grid-table");
   
    player.board.ObjBoard.forEach(object => {
        const allCells = Object.values(object);
        for (let cell of allCells) {
            const button = document.createElement("button");
            button.classList.add("grid-button");
            button.innerHTML = cell;
            grid.appendChild(button);
        }
    });


    return grid
};

const renderTable = (player) => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");
    table.classList.add("board-grid-table");

    const rows = player.board.ObjBoard;
    rows.forEach(row => {
        const tRow = document.createElement("tr");
        tRow.classList.add("battlefield-row");
        tBody.appendChild(tRow);
    })
    

    table.appendChild(tBody);

    return table;

}

// console.table(renderGrid(me))

// renderTable(me);
myDiv.appendChild(renderTable(me));
