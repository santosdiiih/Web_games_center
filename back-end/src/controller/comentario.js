const Comentario = require("../models/Comentario");
const Postagem = require("../models/Postagem");
const Usuario = require("../models/Usuario");

module.exports = {

    async index (request, response){

    },

    // Criação da postagem
    async store(request, response){
        const token = request.headers.authorization;

        const [Bearer, usuario_id] = token.split(" ");
        //  const usuario_id = request.usuarioId;

         // Recuperar o id da postagem
         const {postId} = request.params;
 
         // Recuperar a descrição do comentário
         const {descricao} = request.body;
 
         // Procurar postagem pelo id
         const postagem = await Postagem.findByPk(postId);
 
         // Se não existir, retornar o erro
         if(!postagem){
             return res.status(404).send({erro: "Postagem não encontrada."})
         }
 
         // Criar o comentário usando o createComentario passamdo o id do usuario
         let comentario = await postagem.createComentario(
             {
             descricao,
             usuario_id: usuario_id,
             }
             
         );
 
         comentario = comentario.dataValues;
         comentario.id_postagem = comentario.IdPostagem;
         delete comentario.PostagemId;
         delete comentario.UsuarioId;
 
        //  // Responder com status de criado
         response.status(201).send(comentario);
    }
}