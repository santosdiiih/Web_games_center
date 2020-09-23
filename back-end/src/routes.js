const express = require("express");

// Criando o roteirizador
const routes = express.Router();

const usuarioController = require("./controller/usuario");
const estadoController = require("./controller/estado");
const sexoController = require("./controller/sexo");
const jogoController = require("./controller/jogo");
const generoController = require("./controller/genero");
const plataformaController = require("./controller/plataforma");



routes.post("/estados", estadoController.store);
routes.post("/sexo", sexoController.store);
routes.post("/usuarios", usuarioController.store);
routes.post("/jogo", jogoController.store);
routes.post("/genero", generoController.store);
routes.post("/plataforma", plataformaController.store);

routes.get("/usuarios", usuarioController.list);
routes.get("/estados", estadoController.list);
routes.get("/sexo", sexoController.list);
routes.get("/jogo", jogoController.list);
routes.get("/genero", generoController.list);
routes.get("/plataforma", plataformaController.list);

module.exports = routes;