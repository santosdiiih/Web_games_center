const express = require("express");

// Criando o roteirizador
const routes = express.Router();

const usuarioController = require("./controller/usuario");
const estadoController = require("./controller/estado");

routes.post("/usuarios", usuarioController.store)
routes.post("/estados", estadoController.store)


module.exports = routes;