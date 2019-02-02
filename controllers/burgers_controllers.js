const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/api/all", function(req, res) {
    burger.all(function(data) {
        res.json(data);
    });
});

router.post("/api/new", function(req, res) {
    burger.insert(req.body.burger);
    console.log(res);
});

router.post("/api/update", function(req, res) {
    burger.update(req.body.eaten, req.body.id);
    console.log(res);
});



module.exports = router;