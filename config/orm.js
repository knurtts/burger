const connection = require("./connection"); 

let orm = {
    all: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, data) {
            if (err) {throw err};
            cb(data);
        });
    },
    insert: function(burgerName, cb) {
        console.log(burgerName);
        
        connection.query("INSERT INTO burgers (burger_name) VALUES ('"+burgerName+"');", function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    update: function(id, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?;", [{devoured: true}, {id: id}],
        function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}


module.exports = orm;