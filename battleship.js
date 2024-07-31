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
    const isSpaceAviableHorizontally = (startRow, startCol, length) => {
        const startColIndex = letterCoordinates.indexOf(startCol);

        for (let i = 0; i < length; i++) {
            if (startColIndex + i >= 10 || ObjBoard[startRow][letterCoordinates[startColIndex + i]].length) {
                return false;
            };
        };

        return true;
    };

    const isSpaceAviableVertically = (startRow, startCol, length) => {
        const startColIndex = letterCoordinates.indexOf(startCol);

        for (let i = 0; i < length; i++) {
            if (startRow + i >= 10 || ObjBoard[startRow + i][letterCoordinates[startColIndex]].length) {
                return false;
            };
        };

        return true;
    };

    const placeShipRandomly = (shipSize) => {
        let placed = false;

        while (!placed) {
            const startRow = Math.floor(Math.random() * 10);
            const startCol = letterCoordinates[Math.floor(Math.random() * 10)];
            const randomOrientation = Math.random() > 0.5 ? "vertical" : "horiznontal";

            if (randomOrientation === "vertical" && isSpaceAviableVertically(startRow, startCol, shipSize)) {
                setShipOnBoardVertically(startRow, startCol, Ship(shipSize));
                placed = true;
            } else if (randomOrientation === "horiznontal" && isSpaceAviableHorizontally(startRow, startCol, shipSize)) {
                setShipOnBoardHorizontally(startRow, startCol, Ship(shipSize));
                placed = true;
            };
        }
    }
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
        setShipsRandomly: function (ships) {
            ships.forEach(shipSize => {
                placeShipRandomly(shipSize);
            });
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


