const express = require("express");
const rotas = require("./routes");
const cors = require("cors");
require("./database");

const app =  express();

app.use(cors());

app.use(express.json());

app.use(rotas);

module.exports = app;