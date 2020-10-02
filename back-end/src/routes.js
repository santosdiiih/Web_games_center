const express = require("express");

// Criando o roteirizador
const routes = express.Router();

const usuarioController = require("./controller/usuario");
const estadoController = require("./controller/estado");
const sexoController = require("./controller/sexo");
const jogoController = require("./controller/jogo");
const generoController = require("./controller/genero");
const plataformaController = require("./controller/plataforma");
const postagemController = require("./controller/postagem");
const comentarioController = require("./controller/comentario");
const lojaController = require("./controller/loja");
const itemController = require("./controller/itens");



routes.post("/estados", estadoController.store);
routes.get("/estados", estadoController.list);

routes.post("/sexo", sexoController.store);
routes.get("/sexo", sexoController.index);

routes.post("/usuarios", usuarioController.store);
routes.get("/usuarios", usuarioController.list);
routes.get("/usuarios/:id", usuarioController.searchById);

routes.post("/jogo", jogoController.store);
routes.get("/jogo", jogoController.list);

routes.post("/genero", generoController.store);
routes.get("/genero", generoController.list);

routes.post("/plataforma", plataformaController.store);
routes.get("/plataforma", plataformaController.list);

routes.post("/postagens",postagemController.store);
routes.get("/postagens",postagemController.index);
routes.delete("/postagens/:id",postagemController.delete);

routes.post("/postagens/:postId/comentario",comentarioController.store);
routes.get("/postagens/:postId/comentario", comentarioController.list);

routes.post("/loja", lojaController.store);
routes.get("/loja", lojaController.list);

routes.post("/loja/:itemId/item", itemController.store);




module.exports = routes;