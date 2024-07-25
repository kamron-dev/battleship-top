import { computerMoves } from "./computerMoves.js";

export const setPredeterminedShips = (player) => {
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

export const createAndReturnTableWithShips = (player) => {
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


export const makeMeMove = (opponent, me) => {
    const computerCells = document.querySelectorAll("[data-player=Computer]");
    const mySide = document.querySelector(".player1");
    const computerSide = document.querySelector(".player2");

    mySide.classList.add("disabled");

    const cellClickHandler = (event) => {
        const cell = event.currentTarget;
        const messageContainer = document.getElementById("opponentMessages");
        const row = cell.getAttribute("data-row");
        const column = cell.getAttribute("data-column");
        const isOccupied = cell.classList.length > 1;

        const handleAttack = (row, column, isOccupied, cell) => {
            if (isOccupied) {
                showMessage(messageContainer, opponent.board.receiveAttack(row, column));
                cell.classList.add("battlefield-cell-occupied-hit");
                
                if (checkEndGame(opponent)) {
                    mySide.classList.add("disabled");
                    computerSide.classList.add("disabled");
                    showMessage(messageContainer, `All ships destroyed! ${opponent.name} lost!`);
                };
            } else {
                showMessage(messageContainer, opponent.board.receiveAttack(row, column));
                cell.classList.add("battlefield-cell-miss");
                switchTurns(mySide, computerSide);
                makeComputerMove(opponent, me)
                
            }
        };

        handleAttack(row, column, isOccupied, cell);
        cell.removeEventListener("click", cellClickHandler);

    };

    computerCells.forEach(cell => cell.addEventListener("click", cellClickHandler));
    
};

export const makeComputerMove = (opponent, me) => {
    const myCells = Array.from(document.querySelectorAll("[data-player=Kamron]"));
    const mySide = document.querySelector(".player1");
    const computerSide = document.querySelector(".player2");
    const messageContainer = document.getElementById("myMessages")
    const style = getComputedStyle(mySide);
    const mySideDisabled = style.pointerEvents === "none";
    const opponentMove = computerMoves(opponent);
    
    
    if (!mySideDisabled) {
        setTimeout(() => {
            const shotCell = myCells.find(cell => {
                return cell.getAttribute("data-row") === opponentMove[0].toString() && cell.getAttribute("data-column") === opponentMove[1].toString();
            });
            if (shotCell.classList.contains("battlefield-cell-occupied")) {
                console.log("computer hit target!")
                showMessage(messageContainer, me.board.receiveAttack(opponentMove[0], opponentMove[1]));
                shotCell.classList.add("battlefield-cell-occupied-hit");
                if (checkEndGame(me)) {
                    mySide.classList.add("disabled");
                    computerSide.classList.add("disabled");
                    showMessage(messageContainer, `All ships destroyed! ${me.name} lost!`);
                };
                makeComputerMove(opponent, me)
            } else {
                console.log("computer missed!");
                shotCell.classList.add("battlefield-cell-miss");
                switchTurns(computerSide, mySide);
            }

        }, 2000)
    };
    
};


const switchTurns = (from, to) => {
    from.classList.toggle("disabled");
    to.classList.toggle("disabled");
};

const showMessage = (container, message) => {
    container.innerHTML = ""
    const p = document.createElement("p");
    p.textContent = message;
    container.appendChild(p);
};

const checkEndGame = (player) => {
    return player.board.checkIfGameOver();
};