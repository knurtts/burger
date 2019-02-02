var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  