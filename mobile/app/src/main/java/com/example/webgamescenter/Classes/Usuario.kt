package com.example.webgamescenter.Classes

class Usuario {

    var id = 0
    var primeiro_nome = ""
    var ultimo_nome = ""
    var data_de_nascimento =  "1998-05-22 00:00:00"
    var senha = ""
    var email = "beltrano@gmail28.com"
    var nickname = "beltranola"
    var sexo_id = 1
    var estado_id = 1
    var createdAt = ""
    var updatedAt =  ""
    var SexoId = 1
    var EstadoId = 1

    override fun toString(): String {
        return "Usuario(id=$id, primeiro_nome='$primeiro_nome', ultimo_nome='$ultimo_nome', data_de_nascimento='$data_de_nascimento', senha='$senha', email='$email', nickname='$nickname', sexo_id=$sexo_id, estado_id=$estado_id, createdAt='$createdAt', updatedAt='$updatedAt', SexoId=$SexoId, EstadoId=$EstadoId)"
    }

}

