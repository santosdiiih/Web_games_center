package com.example.webgamescenter.model

class NovoUsuario {

    var primeiro_nome = ""
    var ultimo_nome = ""
    var data_de_nascimento =  ""
    var senha = ""
    var email = ""
    var nickname = ""
    var sexo_id = ""
    var estado_id = ""

    override fun toString(): String {
        return "NovoUsuario(primeiro_nome='$primeiro_nome', ultimo_nome='$ultimo_nome', data_de_nascimento='$data_de_nascimento', senha='$senha', email='$email', nickname='$nickname', sexo_id='$sexo_id', estado_id='$estado_id')"
    }


}