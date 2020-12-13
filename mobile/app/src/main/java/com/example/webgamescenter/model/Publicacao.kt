package com.example.webgamescenter.model

class Publicacao(
    optString: Int,
    optString1: String,
    optString2: String,
    optString3: String
) {

    var id = 0
    var titulo = ""
    var descricao = ""
    var imagem_video = ""
    var hashtag = ""
    var createdAt = ""
    var updatedAt =  ""
    var usuario_id = 1
    var UsuarioId = 1

    var Usuario = {
        var id = 0
        var primeiro_nome = ""
        var nickname = ""
    }

    override fun toString(): String {
        return "Publicacao(id=$id, titulo='$titulo', descricao='$descricao', imagem_video='$imagem_video', hashtag='$hashtag', createdAt='$createdAt', updatedAt='$updatedAt', usuario_id=$usuario_id, UsuarioId=$UsuarioId, Usuario=$Usuario)"
    }


}