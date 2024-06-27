const Ship = (length) => {
    return {
        length,
        timesHit: 0,
        isSunk: function () {
            return this.timesHit === this.length ? true : false;
        },
        hit: function () {
            this.timesHit++;
        },
    };
};

const GameBoard = () => {
    const ObjBoard = [];
    const letterCoordinates = [
        ["A", []],
        ["B", []],
        ["C", []],
        ["D", []],
        ["E", []],
        ["F", []],
        ["G", []],
        ["H", []],
        ["I", []],
        ["J", []]

    ];
    for (let i = 0; i < 10; i++) {
        ObjBoard[i] = Object.fromEntries(letterCoordinates);
        
    };

    
    return {
        ObjBoard,
        setShipOnBoard: function (coordinateNum, coordinateLetter, shipSize) {
            ObjBoard[coordinateNum][coordinateLetter] = Ship(shipSize);
        }
    }
};

const board1 = GameBoard();
board1.setShipOnBoard(0, "B", 2);
console.log(board1.ObjBoard.length);

//console.table(board1.ObjBoard);
// board1.ObjBoard[1].A = "Hey";
// console.log(board1.ObjBoard);

//console.log(board1.ObjBoard.length);



module.exports = {
    Ship,
    GameBoard
};
//module.exports = GameBoard;