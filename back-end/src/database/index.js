const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Estado = require("../models/Estado");
const Sexo = require("../models/Sexo");
const Usuario = require("../models/Usuario");
const Jogo = require("../models/Jogo");
const Genero = require("../models/Genero");
const Plataforma = require("../models/Plataforma");

// Criamo a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig);

// Inicializando as models
Estado.init(conexao);
Sexo.init(conexao);
Usuario.init(conexao);
Jogo.init(conexao);
Genero.init(conexao);
Plataforma.init(conexao);

// Inicializando as associações
Usuario.associate(conexao.models);
Estado.associate(conexao.models);
Sexo.associate(conexao.models);
Jogo.associate(conexao.models);
Genero.associate(conexao.models);
Plataforma.associate(conexao.models);

// Exportamos a conexão
module.exports = conexao;