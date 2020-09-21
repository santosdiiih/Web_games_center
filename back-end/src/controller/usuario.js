const { Op } = require("sequelize");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {

    async store(request, response){
        const { nome, anoDeNascimento, senha, email, nickname, contaPremium, idGeneroSexual, idEstado } = request.body;

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
            return response.status( 400 ).send( { erro : "Usuario já cadastrados" } )
        }

        const senhaCripto = await bcrypt.hash(senha, 10)

        usuario = await Usuario.create({ nome, anoDeNascimento, senha: senhaCripto, email, nickname, contaPremium, idGeneroSexual, idEstado});

        response.status(201).send({
            usuario: {
                usuarioId: usuario.idUsuario,
                nome: usuario.nome,
                nickname: usuario.nickname
            }
        });
    }
}