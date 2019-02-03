const orm = require("../config/orm");


const burger = {
    all: function(cb) {
        orm.all(function(data) {
            cb(data);
        });
    },
    insert: function(burgerName) {
        orm.insert(burgerName, function(data) {
            console.log("Insert function complete.");
        });
    },
    update: function(id) {
        orm.update(id, function() {
            console.log("UPDATED!!!");
        });
    }
};

module.exports = burger;