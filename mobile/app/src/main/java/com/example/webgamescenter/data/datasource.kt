package com.example.webgamescenter.data

import com.example.webgamescenter.model.`Card-Jogo`

class datasource {

    companion object{

        fun getJogos() : ArrayList<`Card-Jogo`>{

            var jogos = ArrayList<`Card-Jogo`>()

            jogos.add(`Card-Jogo`(1, "pokemon", 2020-12-0,"lalala lend", 4 ))
            jogos.add(`Card-Jogo`(2, "jubiscreide", 2020-12-0,"pokemon lend", 4 ))
            jogos.add(`Card-Jogo`(3, "jb nascimento", 2020-12-0,"brawrs ralha", 4 ))
            jogos.add(`Card-Jogo`(4, "luluzinha", 2020-12-0,"agora 2.0", 4 ))

            return jogos
        }
    }
}