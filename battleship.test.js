const Ship = require("./battleship");
const GameBoard = require("./battleship");
const ship = Ship(4)

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