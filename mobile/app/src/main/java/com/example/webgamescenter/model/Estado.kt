package com.example.webgamescenter.model

data class Estado (
    val id:  Long,
    val nome: String = "",
    val sigla:String = ""

)
{
    override fun toString(): String {
        return "$sigla - $nome"
    }
}



