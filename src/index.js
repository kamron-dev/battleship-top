import { Player, ComputerPlayer, Ship, GameBoard } from "../battleship.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player("Kamron");
const opponent = ComputerPlayer("Computer");

me.board.setShipOnBoard(1, "A");
me.board.setShipOnBoard(3, "A");
me.board.setShipOnBoard(4, "G");
me.board.setShipOnBoard(5, "B");
me.board.setShipOnBoard(8, "A", 4, "horizontal");

const createAndFillTableWithShips = (player) => {
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
    const allTds = document.querySelectorAll(".battlefield-cell");
    allTds.forEach(cell => {
        cell.addEventListener("click", () => {
            const player = cell.getAttribute("data-player");
            const data_row = cell.getAttribute("data-row");
            const data_column = cell.getAttribute("data-column");
            
            if (cell.classList.length > 1) {
                if (player === "Computer") {
                    opponent.board.receiveAttack(data_row, data_column)
                } else {
                    me.board.receiveAttack(data_row, data_column)
                    console.log(me.board.ObjBoard[data_row][data_column])
                }
                
            } else return;
            
            
        })
    })
};


myTable.appendChild(createAndFillTableWithShips(me));
// opponentsTable.appendChild(createAndFillTableWithShips(opponent));
makeCellsWork()
