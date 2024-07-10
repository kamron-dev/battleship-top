import { Player, ComputerPlayer, Ship, GameBoard } from "../battleship.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player();
const opponent = ComputerPlayer();

me.board.setShipOnBoard(1, "A");
me.board.setShipOnBoard(3, "A");
me.board.setShipOnBoard(4, "G");
me.board.setShipOnBoard(5, "B");

const populateTable = (table, player) => {

}

const createTable = () => {
    const letterCoordinates = "ABCDEFGHIJ".split("");
    const tBody = document.createElement("tbody");  /// there should be only 1
    
    // create 10 trs
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-row", i);
        tr.classList.add("battlefield-row");
        tBody.appendChild(tr);

        // create 10 tds in each tr
        for (let j = 0; j < 10; j++) {
            const td = document.createElement("td");
            td.setAttribute("data-column", letterCoordinates[j]);
            td.setAttribute("data-row", i);
            td.classList.add("battlefield-cell");
            const div = document.createElement("div");
            div.classList.add("battlefield-cell-content");
            td.appendChild(div);
            tr.appendChild(td);
        };
    };

    return tBody;
};

myTable.appendChild(createTable());
opponentsTable.appendChild(createTable());
