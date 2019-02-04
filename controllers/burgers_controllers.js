const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/index", function(req, res) {
    res.render("index");
});

router.get("/api/all", function(req, res) {
    burger.all(function(data) {
        // console.log(data);
        res.json(data);
    });
});

router.post("/api/new", function(req, res) {
    console.log("request sent");
    var burgerName = req.body.name;
    // console.log(burgerName);
    
    burger.insert(burgerName, function(data) {
        console.log(data);
    });
});

router.post("/api/update", function(req, res) {
    burger.update(req.body.id, function(data) {
        console.log(res);
    });
});

module.exports = router;