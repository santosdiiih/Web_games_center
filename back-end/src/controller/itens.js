// const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const Itens = require("../models/Itens");
const Loja = require("../models/Loja");

module.exports ={

    // Listar todos itens
    async list(request, response){
        const itens = await Itens.findAll()

        response.send(itens);
    },

    //Criação de ITENS
    async store(request, response){

        const { itemId } = request.params;

        const {nome, imagem, valor, quantida_de_item, desconto_premium} = request.body;

        const loja = await Loja.findByPk(itemId);
        
        let itens = await loja.createIten(
            {nome, imagem, valor, quantida_de_item, desconto_premium});

        response.status(201).send({
            itens: {
                nome: itens.nome,
                imagem: itens.imagem,
                valor: itens.valor,
                quantida_de_Item: itens.quantida_de_item,
                descontoPremium: itens.desconto_premium
            }
        });
    },

    async delete(req, res){
        //pegando o id do item a apagar
        const { id } = req.params;

        //procura o item pelo id
        let item = await Item.findByPk(id);

        //se a item não existir, retorna not found
        if(!item){
            return res.status(404).send({ error: "Item não encontrada"})
        }

        // efetua a exclusão do item
        await item.destroy();

        res.status(204).send();
    },

    //editar itens
    async editar(req,res){
        const {nome, valor, qtd, descontoPremium} = request.body;
        const { id } = req.params;
        let item = await Item.findByPk(id);
        
        await item.update({nome, valor, qtd, descontoPremium});

        response.status(201).send({
            itens: {
                nome: itens.nome,
                valor: itens.valor,
                qtd: itens.qtd,
                descontoPremium: itens.descontoPremium
            }
        });
    }
}