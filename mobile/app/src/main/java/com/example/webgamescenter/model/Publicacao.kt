package com.example.webgamescenter.model

class Publicacao(var id: Int, var titulo: String, var descricao: String) {
    override fun toString(): String {
        return "Publicacao(id=$id, titulo='$titulo', descricao='$descricao')"
    }

}