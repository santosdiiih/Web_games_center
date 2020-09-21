// const { Op } = require("sequelize");
const Estado = require("../models/Estado");

module.exports ={

    store(request, response){
        const {nome, sigla} = request.body;

        let estados =  Estado.create({nome, sigla});

        response.status(201).send({
            Estado: {
                nome: estados.nome,
                sigla: estados.sigla
            }
        });
    }
}