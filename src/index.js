import { Player, ComputerPlayer, Ship, GameBoard } from "../battleship.js";

const myTable = document.querySelector(".battlefield-table-1");
const opponentsTable = document.querySelector(".battlefield-table-2");
const me = Player();
const opponent = ComputerPlayer();

me.board.setShipOnBoard(1, "A");
me.board.setShipOnBoard(3, "A");
me.board.setShipOnBoard(4, "G");
me.board.setShipOnBoard(5, "B");
me.board.setShipOnBoard(8, "A", 4, "horizontal");

opponent.board.setShipOnBoard(1, "A");
opponent.board.setShipOnBoard(3, "A");
opponent.board.setShipOnBoard(4, "G");
opponent.board.setShipOnBoard(5, "B");

// const createTable = () => {
//     const letterCoordinates = "ABCDEFGHIJ".split("");
//     const tBody = document.createElement("tbody");  /// there should be only 1
    
//     // create 10 trs
//     for (let i = 0; i < 10; i++) {
//         const tr = document.createElement("tr");
//         tr.setAttribute("data-row", i);
//         tr.classList.add("battlefield-row");
//         tBody.appendChild(tr);

//         // create 10 tds in each tr
//         for (let j = 0; j < 10; j++) {
//             const td = document.createElement("td");
//             td.setAttribute("data-column", letterCoordinates[j]);
//             td.setAttribute("data-row", i);
//             td.classList.add("battlefield-cell");
//             const div = document.createElement("div");
//             div.classList.add("battlefield-cell-content");
//             td.appendChild(div);
//             tr.appendChild(td);
//         };
//     };

//     return tBody;
// };

const createAndFillTableWithShips = (player) => {
    const tBody = document.createElement("tbody");  /// there should be only 1
    
    for (let i = 0; i < player.board.ObjBoard.length; i++) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-row", i);
        tr.classList.add("battlefield-row");
        tBody.appendChild(tr);

        for (let cell in player.board.ObjBoard[i]) {
            const td = document.createElement("td");
            td.setAttribute("data-column", cell);
            td.setAttribute("data-row", i);
            td.classList.add("battlefield-cell");
            if (player.board.ObjBoard[i][cell].length) td.classList.add("battlefield-cell-occupied");
            const div = document.createElement("div");
            div.classList.add("battlefield-cell-content");
            td.appendChild(div);
            tr.appendChild(td);
            

        }


        // for (let j = 0; j < player.board.ObjBoard[i].length; j++) {
        //     // const td = document.createElement("td");
        //     // td.setAttribute("data-column", letterCoordinates[j]);
        //     // td.setAttribute("data-row", i);
        //     // td.classList.add("battlefield-cell");
        //     // if (player.board.ObjBoard[i][j].length) td.classList.add("battlefield-cell-occupied");
        //     // const div = document.createElement("div");
        //     // div.classList.add("battlefield-cell-content");
        //     // td.appendChild(div);
        //     // tr.appendChild(td);
        //     console.log(letterCoordinates[j])
        // }
    }
    return tBody;
}

myTable.appendChild(createAndFillTableWithShips(me));
// opponentsTable.appendChild(createAndFillTableWithShips(opponent));
