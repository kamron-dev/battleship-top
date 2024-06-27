const {Ship, GameBoard} = require("./battleship");



const ship = Ship(4);


test("Has the properties", () => {
    
    expect(Object.keys(ship)).toEqual(["length", "timesHit", "isSunk", "hit"]);
});

test("Ships take hits", () => {
    ship.hit();
    ship.hit();

    expect(ship.timesHit).toBe(2);
});

test("Ships sink when all length hit", () => {
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
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