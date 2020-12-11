package com.example.webgamescenter.http

import com.example.webgamescenter.model.Estado
import com.google.gson.Gson
import okhttp3.OkHttpClient
import okhttp3.Request

class HttpHelperEstado {


    fun getEstados() : List<Estado> {
        // definir a URL do servidor
        val URL = "http://192.168.100.106:3333/estados"

        // criando um cliente que dispara a requisição
        val client = OkHttpClient()

        // criando uma requisição GET
        val request = Request.Builder().url(URL).get().build()

        // enviar a requisição para o servidor
        val response = client.newCall(request).execute()

        //extraindo o body da requisicao
        val responseBody = response.body()

        // transformando o body em uma string
        val jsonEstado = responseBody!!.string()

        // transformando o json estado (que é um string) em uma lista de estados
        val estados = Gson().fromJson(jsonEstado, Array<Estado>::class.java).toList()

        return estados

    }
}