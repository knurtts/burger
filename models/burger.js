const orm = require("../config/orm");


const burger = {
    all: function() {
        orm.selectAll(function(res) {
            res.json(res);
        });
    },
    insert: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    update: function(eaten, id, cb) {
        orm.updateOne(eaten, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;