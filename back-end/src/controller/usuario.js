const { Op } = require("sequelize");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {

    // Listar todos os usuarios
    async list( request, response ) {
        const usuario = await Usuario.findAll();

        response.send( usuario );
    },

    //Criação de usuarios
    async store(request, response){
        const { nome, data_de_nascimento, senha, email, nickname, conta_premium, sexo_id, estado_id } = request.body;

        // Verificar se o usuario já existe
        let usuario = await Usuario.findOne({
            
            where:{
                [Op.or] : [
                    {email: email},
                    {nickname: nickname}
                ]
            }
        });

        if ( usuario ) { 
            return response.status( 400 ).send( { erro : "Usuario já cadastrado" } )
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        usuario = await Usuario.create({ nome, data_de_nascimento, senha: senhaCripto, email, nickname, conta_premium, sexo_id, estado_id});

        response.status(201).send({
            usuario: {
                nome: usuario.nome,
                data_de_nascimento: usuario.data_de_nascimento,
                email: usuario.email,
                nickname: usuario.nickname
            }
        });
    }
}