const express = require("express");
const rotas = require("./routes")
require("./database")

const app =  express();

app.use(express.json());

module.exports = app;