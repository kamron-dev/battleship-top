export const computerMoves = (computerPlayer) => {
    const rows = "ABCDEFGHIJ".split("");
    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const movesAlreadyMade = computerPlayer.board.missedShots;

    let newMove = [rows[Math.floor(Math.random() * rows.length)], columns[Math.floor(Math.random() * rows.length)]];
    computerPlayer.board.missedShots.push(newMove);
    return newMove;
};