const connection = require("./connection"); 

let orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            console.log(data);
        });
    },
    insertOne: function(burgerName) {
        connection.query("INSERT INTO (burgers) VALUES ("+burgerName+")", function(err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    updateOne: function(eaten, id) {
        connection.query("UPDATE burgers SET ? WHERE ?", {devoured: eaten, id: id},
        function(err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
}


module.exports = orm;