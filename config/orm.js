const connection = require("./connection"); 

let orm = {
    all: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insert: function(burgerName) {
        connection.query("INSERT INTO (burgers) VALUES ("+burgerName+");", function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    update: function(eaten, id) {
        connection.query("UPDATE burgers SET ? WHERE ? ;", {devoured: eaten, id: id},
        function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}


module.exports = orm;