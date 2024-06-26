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





module.exports = Ship;