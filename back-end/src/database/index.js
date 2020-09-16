const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const conexao = new Sequelize(dbConfig);

module.exports = conexao;