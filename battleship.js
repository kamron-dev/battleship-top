const Ship = (length) => {
    return {
        length,
        timesHit: 0,
        isSunk: false,
        hit: function () {
            this.timesHit++;
        },
    }
};





module.exports = Ship;