export const computerMoves = (computerPlayer) => {
    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rows = "ABCDEFGHIJ".split("");
    let newMove;

    // helpers that turn row into index and back
    const rowsIntoIndex = (row) => rows.indexOf(row);
    const indexIntoRow = (index) => rows[index];
    
    // helper that checks if the move is valid

    const checkIfValid = (col, row) => col >= 0 && col < columns.length && row >= 0 && row < rows.length; 

    const createAdjacentMoves = (lastMove) => {
        const [lastColumn, lastRow] = lastMove;
        const rowIndex = rowsIntoIndex(lastRow);

        const potentialMoves = [
            [lastColumn, indexIntoRow(rowIndex + 1)], // Up one row
            [lastColumn, indexIntoRow(rowIndex - 1)], // Down one row
            [lastColumn + 1, lastRow], // Left
            [lastColumn - 1, lastRow] // Right
        ];

        return potentialMoves.filter(([column, row]) => {
            return checkIfValid(column, rowsIntoIndex(row));
        });
    };
    if (computerPlayer.movesMade.length > 0 && computerPlayer.hits.length > 0) {

        const lastMove = computerPlayer.movesMade[computerPlayer.movesMade.length - 1];
        const lastHit = computerPlayer.hits[computerPlayer.hits.length - 1];
        const lastMoveWasHit = lastMove[0] === lastHit[0] && lastMove[1] === lastHit[1];

        console.log(`Last Move: ${lastMove}, Last hit: ${lastHit}`);
    
        if (lastMoveWasHit) {
            const adjacentMoves = createAdjacentMoves(lastMove);
            const filteredAdjacentMoves = adjacentMoves.some(move => {
                !computerPlayer.movesMade.some(madeMove => madeMove[0] === move[0] && madeMove[1] === madeMove[1]);
            });
            if (filteredAdjacentMoves.length > 1) {
                newMove = filteredAdjacentMoves[Math.floor(Math.random() * filteredAdjacentMoves.length)];
            } else {
                newMove = filteredAdjacentMoves;
            }
        }
    }

    if (!newMove) {
        do {
            newMove = [columns[Math.floor(Math.random() * columns.length)], rows[Math.floor(Math.random() * rows.length)]];
        } while (
            computerPlayer.movesMade.some(move => move[0] === newMove[0] && move[1] === newMove[1])
        );

    }

   
    computerPlayer.movesMade.push(newMove);
    return newMove;

};

