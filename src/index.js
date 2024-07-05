import { Player, ComputerPlayer, Ship, GameBoard } from "../battleship.js";

let myDiv = document.querySelector(".player1");
const me = Player();

const renderGrid = (player) => {
    const grid = document.createElement("div");
    grid.classList.add("board-grid");
   
    player.myBoard.ObjBoard.forEach(object => {
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

// console.table(renderGrid(me))


myDiv.appendChild(renderGrid(me));
