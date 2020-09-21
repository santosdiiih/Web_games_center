const express = require("express");
const rotas = require("./routes");
require("./database");

const app =  express();

app.use(express.json());

app.use(rotas);

module.exports = app;