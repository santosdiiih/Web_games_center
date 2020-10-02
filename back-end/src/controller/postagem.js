const Postagem = require("../models/Postagem");

module.exports = {


    // Criação da postagem
    async store(request, response){
        const token = request.headers.authorization;

        const [Bearer, usuario_id] = token.split(" ");


        const {titulo, descricao, imagem_video, hashtag} = request.body;

        let postagem = await Postagem.create({titulo, descricao, imagem_video, hashtag, usuario_id});

        response.status(201).send(postagem);
    }
}