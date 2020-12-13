package com.example.webgamescenter.model

class Publicacao(
    var id: Int = 0,
    var titulo: String ,
    var descricao: String ,
    var imagem_video: String = "",
    var hashtag: String = "",
    var createdAt:String = "",
    var updatedAt: String = "",
    var usuario_id: Int = 1

){
    override fun toString(): String {
        return "Publicacao(id=$id, titulo='$titulo', descricao='$descricao', imagem_video='$imagem_video', hashtag='$hashtag', createdAt='$createdAt', updatedAt='$updatedAt', usuario_id=$usuario_id)"
    }

}