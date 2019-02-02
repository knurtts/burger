const orm = require("../config/orm");


const burger = {
    all: function() {
        orm.all(function(data) {
            res.json(data);
        });
    },
    insert: function(burgerName) {
        orm.insert(burgerName).then(function(data) {
            res.json(data);
        });
    },
    update: function(eaten, id) {
        orm.update(eaten, id).then(function(data) {
            res.json(data);
        });
    }
};

module.exports = burger;