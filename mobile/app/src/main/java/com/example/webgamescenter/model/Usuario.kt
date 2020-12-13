package com.example.webgamescenter.model

class Usuario {

    var id = 0
    var primeiro_nome = ""
    var ultimo_nome = ""
    var data_de_nascimento =  ""
    var senha = ""
    var email = ""
    var nickname = ""
    var sexo_id = ""
    var estado_id = ""
    var createdAt = ""
    var updatedAt =  ""
    var SexoId = 0


    override fun toString(): String {
        return "Usuario(id=$id, primeiro_nome='$primeiro_nome', ultimo_nome='$ultimo_nome', data_de_nascimento='$data_de_nascimento', senha='$senha', email='$email', nickname='$nickname', sexo_id=$sexo_id, estado_id=$estado_id, createdAt='$createdAt', updatedAt='$updatedAt', SexoId=$SexoId)"
    }

}

