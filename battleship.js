const Ship = (length) => {
    return {
        length,
        timesHit: 0,
        isSunk: false
    }
};

let ship = Ship(4);

console.log(ship);

module.exports = Ship;