const Postagem = require("../models/Postagem");

module.exports = {


    // Criação da postagem
    async store(request, response){
        const token = request.headers.authorization;

        const [Bearer, usuario_id] = token.split(" ");


        const {titulo, descricao, imagem_video, hashtag} = request.body;

        let postagem = await Postagem.create({titulo, descricao, imagem_video, hashtag, usuario_id});

        response.status(201).send(postagem);
    },

    // Listagem de postagem
    async index(request, response){
        let postagens = await Postagem.findAll({
            include:{
                association: "Usuario",
                attributes: [ "id", "nome", "nickname" ]
            },
            order:[
                ["created_at", "DESC"]
            ]
        });

        response.send(postagens);
    },

    async delete(request, response){


        // Pegando o id do post apagar
        const {id} = request.params;

        // Procura o post pelo id
        let postagem = await Postagem.findByPk( id );
        
        // Se a postagem não existir retorna not found
        if(!postagem){
            return response.status(404).send({erro: "Postagem não encontrada."})
        }
        // Se o aluno logado for diferente do aluno que criou a postagem retorna não autorizado 
        // if(postagem.usuario_id != usuario_id){
        //     return res
        //             .status(401)
        //             .send({erro: "Você não tem permissão para apagar esta postagem."})
        // }
        
        await postagem.destroy();

        response.status(204).send();
    }
}