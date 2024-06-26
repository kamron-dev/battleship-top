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

const GameBoard = (size = 10) => {
    const board = [];
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = [];
        };
    }

    const ObjBoard = [
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        },
        {
            A: [], B: [],
            C: [], D: [],
            E: [], F: [],
            G: [], H: [],
            I: [], J: []
        }
    ]
    return {
        board,
        ObjBoard
    }
};

const board1 = GameBoard();

board1.ObjBoard[1].A = "Hey";
console.log(board1.ObjBoard);

//console.log(board1.ObjBoard.length);



module.exports = Ship;