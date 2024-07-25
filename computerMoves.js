export const computerMoves = (computerPlayer) => {
    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rows = "ABCDEFGHIJ".split("");
    
    let newMove;

    do {
        newMove = [columns[Math.floor(Math.random() * columns.length)], rows[Math.floor(Math.random() * rows.length)]];
    } while (
        computerPlayer.movesMade.some(move => move[0] === newMove[0] && move[1] === newMove[1])
    );
   
    computerPlayer.movesMade.push(newMove);
    return newMove;
};