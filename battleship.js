const Ship = (length, timesHit = 0) => {
    return {
        length,
        timesHit,
        checkIfSunk: function () {
            return this.timesHit === this.length;
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
            };
        },
        receiveAttack: function (coordinateNum, coordinateLetter) {
            if (ObjBoard[coordinateNum][coordinateLetter].length) {
                ObjBoard[coordinateNum][coordinateLetter].hit();
                return "The ship has been hit!";
            } else {
                this.missedShots.push([coordinateNum, coordinateLetter]);
                return "Miss!";
            }
        },
        missedShots: [],
    }
};

const board1 = GameBoard();
board1.setShipOnBoard(0, "A", 2);
//console.log(board1.ObjBoard[0]["A"].checkIfSunk());
console.log("Ship before taking hit: " + board1.ObjBoard[0]["A"].timesHit);
console.log(board1.receiveAttack(0, "A"));
console.log(board1.receiveAttack(0, "A"));
console.log("Ship after taking hit: " + board1.ObjBoard[0]["A"].timesHit);
console.log("The ship has sunk: " + board1.ObjBoard[0]["A"].checkIfSunk())
console.table(board1.missedShots)
//console.log(board1.ObjBoard);

//console.table(board1.ObjBoard);
// board1.ObjBoard[1].A = "Hey";
// console.log(board1.ObjBoard);

//console.log(board1.ObjBoard.length);



module.exports = {
    Ship,
    GameBoard
};
