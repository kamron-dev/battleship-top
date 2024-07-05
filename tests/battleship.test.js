const {Ship, GameBoard, Player, ComputerPlayer} = require("../battleship");



const ship = Ship(4);


test("Has the properties", () => {
    
    expect(Object.keys(ship)).toEqual(["length", "timesHit", "checkIfSunk", "hit"]);
});

test("Ships take hits", () => {
    ship.hit();
    ship.hit();

    expect(ship.timesHit).toBe(2);
});

test("Ships sink when all length hit", () => {
    ship.hit();
    ship.hit();

    expect(ship.checkIfSunk()).toBe(true);
});

test("Sets ships on board", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2);
    expect(newBoard.ObjBoard[0]["A"]).toBeTruthy()
    
});

test("Doesn't place ships on wrong coordinates", () => {
    const newBoard = GameBoard();
    expect(newBoard.setShipOnBoard(0, "Z", 2)).toBe(undefined);
    
});

test("GameBoard puts larger ships on multiple cells horizontally", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2, "horizontal");
    expect(newBoard.ObjBoard[0]["A"]).toEqual(newBoard.ObjBoard[0]["B"]);
})

test("GameBoard puts larger ships on multiple cells vertically", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2, "vertical");
    expect(newBoard.ObjBoard[0]["A"]).toEqual(newBoard.ObjBoard[1]["A"]);
})

test("There is receiveAttack method", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2);
    expect(newBoard.receiveAttack(1, "A")).toBeTruthy()
});

test("receiveAttack method takes shots", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2);
    expect(newBoard.receiveAttack(0, "A")).toEqual("The ship has been hit!");
});

test("receiveAttack method hanldes missed shots", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2);
    expect(newBoard.receiveAttack(4, "B")).toEqual("Miss!");
});

test("receiveAttack method collects missed shots", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2);
    newBoard.receiveAttack(4, "B");
    expect(newBoard.missedShots).toEqual([[4, "B"]]);
});

test("Gameboards report when all ships have been sunk", () => {
    const newBoard = GameBoard();
    newBoard.setShipOnBoard(0, "A", 2, "horizontal");
    newBoard.receiveAttack(0, "A");
    newBoard.receiveAttack(0, "B");
    expect(newBoard.checkIfGameOver()).toBe(true);
});

test("Player factory exists!", () => {
    const player1 = Player()
    expect(typeof player1).toEqual("object")
});

test("Computer player factory exists!", () => {
    const computerPlayer = ComputerPlayer()
    expect(typeof computerPlayer).toEqual("object")
});

