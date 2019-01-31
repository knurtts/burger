const express = require("express");
const burger = require("../models/burger");

module.exports = function(app) {
    app.get("/", function(req, res) {
        burger.all();
        console.log(res);
    });

    app.post("/new", function(req, res) {
        burger.insert(req.body.burger);
        console.log(res);
    });

    app.post("/update", function(req, res) {
        burger.update(req.body.eaten, req.body.id);
        console.log(res);
        
    })
}