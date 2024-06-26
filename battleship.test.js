const Ship = require("./battleship");

test("Has the properties", () => {
    const ship = Ship(4)
    
    expect(Object.keys(ship)).toEqual(["length", "timesHit", "isSunk"]);
});

