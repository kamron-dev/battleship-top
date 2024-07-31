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
            row[letter] = []; // Initialize as an empty array or null to signify no ship
        });
        ObjBoard[i] = row;
    };

    const clearOutTheBoard = () => {
        ObjBoard = [];
        
        // for (let i = 0; i < 10; i++) {
        //     const row = {};
        //     letterCoordinates.forEach(letter => {
        //         row[letter] = []; // Initialize as an empty array or null to signify no ship
        //     });
        //     ObjBoard[i] = row;
        // };
    }

    const isWithinBounds = (row, col) => row >= 0 && row < 10 && col >= 0 && col < 10;

    const isSpaceAvailable = (startRow, startCol, length, orientation) => {
        const startColIndex = letterCoordinates.indexOf(startCol);

        // Base case: Out of bounds or space occupied
        for (let i = 0; i < length; i++) {
            const row = startRow + (orientation === "vertical" ? i : 0);
            const colIndex = startColIndex + (orientation === "horizontal" ? i : 0);

            if (!isWithinBounds(row, colIndex) || ObjBoard[row][letterCoordinates[colIndex]].length) {
                return false;
            }

            // Check surrounding cells, including diagonals
            if (
                (row > 0 && ObjBoard[row - 1][letterCoordinates[colIndex]]?.length) || // Above
                (row < 9 && ObjBoard[row + 1][letterCoordinates[colIndex]]?.length) || // Below
                (colIndex > 0 && ObjBoard[row][letterCoordinates[colIndex - 1]]?.length) || // Left
                (colIndex < 9 && ObjBoard[row][letterCoordinates[colIndex + 1]]?.length) || // Right
                (row > 0 && colIndex > 0 && ObjBoard[row - 1][letterCoordinates[colIndex - 1]]?.length) || // Top-left
                (row > 0 && colIndex < 9 && ObjBoard[row - 1][letterCoordinates[colIndex + 1]]?.length) || // Top-right
                (row < 9 && colIndex > 0 && ObjBoard[row + 1][letterCoordinates[colIndex - 1]]?.length) || // Bottom-left
                (row < 9 && colIndex < 9 && ObjBoard[row + 1][letterCoordinates[colIndex + 1]]?.length) // Bottom-right
            ) {
                return false;
            }
        }

        // If all checks are passed, return true
        return true;
    };

    const placeShipRandomly = (shipSize) => {
        let placed = false;

        while (!placed) {
            const startRow = Math.floor(Math.random() * 10);
            const startCol = letterCoordinates[Math.floor(Math.random() * 10)];
            const randomOrientation = Math.random() > 0.5 ? "vertical" : "horizontal";

            if (randomOrientation === "vertical" && isSpaceAvailable(startRow, startCol, shipSize, "vertical")) {
                setShipOnBoardVertically(startRow, startCol, Ship(shipSize));
                placed = true;
            } else if (randomOrientation === "horizontal" && isSpaceAvailable(startRow, startCol, shipSize, "horizontal")) {
                setShipOnBoardHorizontally(startRow, startCol, Ship(shipSize));
                placed = true;
            };
        }
    };

    const setShipOnBoardHorizontally = (startRow, startCol, ship) => {
        const startColIndex = letterCoordinates.indexOf(startCol);

        for (let i = 0; i < ship.length; i++) {
            ObjBoard[startRow][letterCoordinates[startColIndex + i]] = ship;
        }
    };

    const setShipOnBoardVertically = (startRow, startCol, ship) => {
        const startColIndex = letterCoordinates.indexOf(startCol);
        for (let i = 0; i < ship.length; i++) {
            ObjBoard[startRow + i][letterCoordinates[startColIndex]] = ship;
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
                    return "Ship set on board!";
                }
            } else {
                console.error("Wrong coordinates. Ship is not placed!");
                return;
            }
        },
        setShipsRandomly: function (ships) {
            ships.forEach(shipSize => {
                placeShipRandomly(shipSize);
            });
        },
        receiveAttack: function (coordinateNum, coordinateLetter) {
            if (ObjBoard[coordinateNum][coordinateLetter].length) {
                ObjBoard[coordinateNum][coordinateLetter].hit();
                
                if (ObjBoard[coordinateNum][coordinateLetter].checkIfSunk()) {
                    return "The ship has sunk!";
                } else {
                    return "The ship has been hit!";
                }
            } else {
                this.missedShots.push([coordinateNum, coordinateLetter]);
                return "Miss!";
            }
        },
        checkIfGameOver: function () {
            const allCells = ObjBoard.flatMap(row => Object.values(row));
            const allCellsWithShips = allCells.filter(cell => cell.length);
            return allCellsWithShips.every(ship => ship.checkIfSunk());
        },
        missedShots: [],
        clearOutTheBoard
    };
};

const Player = (name) => {
    return {
        name,
        board: GameBoard()
    };
};

const ComputerPlayer = (name) => {
    return {
        name,
        movesMade: [],
        hits: [],
        board: GameBoard()
    };
};

export { Ship, GameBoard, Player, ComputerPlayer };
