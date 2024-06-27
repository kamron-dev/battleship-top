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
    const letterCoordinates = "ABCDEFGHIJ".split("");
    for (let i = 0; i < 10; i++) {
        const row = {};
        letterCoordinates.forEach(letter => {
            row[letter] = []
        })
        ObjBoard[i] = row;
        
        
    };

    
    return {
        ObjBoard,
        setShipOnBoard: function (coordinateNum, coordinateLetter, shipSize) {
            if (coordinateNum >= 0 && coordinateNum < 10 && letterCoordinates.includes(coordinateLetter)) {
                ObjBoard[coordinateNum][coordinateLetter] = Ship(shipSize);

            } else {
                console.error("Wrong coordinates. Ship is not placed!");
                return;
            }
        }
    }
};

const board1 = GameBoard();
board1.setShipOnBoard(0, "A", 2);
console.log(board1.ObjBoard[0]["A"]);

//console.log(board1.ObjBoard);

//console.table(board1.ObjBoard);
// board1.ObjBoard[1].A = "Hey";
// console.log(board1.ObjBoard);

//console.log(board1.ObjBoard.length);



module.exports = {
    Ship,
    GameBoard
};
