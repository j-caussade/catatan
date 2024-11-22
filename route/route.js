require("dotenv").config({path: "config.env"});
const express = require("express");

const route = express.Router();

route.get('/', (req, res) => {
    res.render("index", {
        error: null
    });
});

route.get('/home', (req, res) => {
    res.render("home", {
        error: null
    })
});

route.get('/read', (req, res) => {
    res.render("read", {
        error: null
    })
});

route.get('/write', (req, res) => {
    res.render("write", {
        error: null
    })
});

module.exports = route;