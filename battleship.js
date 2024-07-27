const Ship = (length = 1) => {
    return {
        length,
        timesHit: 0,
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
    const setShipOnBoardHorizontally = (starRow, startCol, ship) => {
        // implement
        const startColIndex = letterCoordinates.indexOf(startCol);

        for (let i = 0; i < ship.length; i++) {
            ObjBoard[starRow][letterCoordinates[startColIndex + i]] = ship;
        }
    };

    const setShipOnBoardVertically = (starRow, startCol, ship) => {
        // implement
        const startColIndex = letterCoordinates.indexOf(startCol);
        for (let i = 0; i < ship.length; i++) {
            ObjBoard[starRow + i][letterCoordinates[startColIndex]] = ship;
        }
    };

    
    return {
        ObjBoard,
        setShipOnBoard: function (coordinateNum, coordinateLetter, shipSize, orientation = "horizontal") {
            if (coordinateNum >= 0 && coordinateNum < 10 && letterCoordinates.includes(coordinateLetter)) {
                const ship = Ship(shipSize);
                if (orientation === "horizontal") {
                    setShipOnBoardHorizontally(coordinateNum, coordinateLetter, ship);
                    return "Ship set on board!";
                } else {
                    setShipOnBoardVertically(coordinateNum, coordinateLetter, ship);
                    return "Ship set on board!"
                }
                
            } else {
                console.error("Wrong coordinates. Ship is not placed!");
                return;
            };
        },
        receiveAttack: function (coordinateNum, coordinateLetter) {
            // console.log(`CoordinateNum: ${coordinateNum}, CoordinateLetter: ${coordinateLetter}`);
            if (ObjBoard[coordinateNum][coordinateLetter].length) {
                ObjBoard[coordinateNum][coordinateLetter].hit();
                
                if (ObjBoard[coordinateNum][coordinateLetter].checkIfSunk()) {
                    return "The ship has sunk!";
                } else {
                    return "The ship has been hit!";
                };
        
            } else {
                this.missedShots.push([coordinateNum, coordinateLetter]);
                return "Miss!";
            }
        },
        checkIfGameOver: function () {
            // flatten the object into array with all cells
            const allCells = ObjBoard.flatMap(row => Object.values(row));
            // filter out the empty cells
            const allCellsWithShips = allCells.filter(cell => cell.length);
            // check if all have been sunk
            return allCellsWithShips.every(ship => ship.checkIfSunk());
        },
        missedShots: [],
    }
};


const Player = (name) => {
    
    return {
        name,
        board: GameBoard()
    }
};

const ComputerPlayer = (name) => {
    
    return {
        name,
        movesMade: [],
        hits: [],
        board: GameBoard()
    }
}




export { Ship,
    GameBoard,
    Player,
    ComputerPlayer }


