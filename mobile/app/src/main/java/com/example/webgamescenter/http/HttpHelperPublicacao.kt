package com.example.webgamescenter.http

import com.example.webgamescenter.model.Publicacao
import com.example.webgamescenter.model.RespostaNovoUsuario
import com.example.webgamescenter.model.RespostaPublicacao
import com.google.gson.Gson
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import org.json.JSONArray

class HttpHelperPublicacao {

    // definir a URL do servidor
    val URL = "https://web-center-games.herokuapp.com/postagens"

    // criando um cliente que dispara a requisição
    val client = OkHttpClient()

    fun getPublicacao(token: String): List<Publicacao> {


        // criando uma requisição GET
        val request = Request.Builder()
            .url(URL)
            .addHeader("Authorization", "Bearer ${token}")
            .get().build()

        // enviar a requisição para o servidor
        val response = client.newCall(request).execute()
        //extraindo o body da requisicao
        val responseBody = response.body()
        val listarPublicacao = ArrayList<Publicacao>()
        val publicacaoJson = responseBody!!.string()
        val publicacaoArray = JSONArray(publicacaoJson)

        for (i in 0 until publicacaoArray.length()) {
            var id = publicacaoArray.getJSONObject(i).getInt("id")
            var titulo = publicacaoArray.getJSONObject(i).getString("titulo")
            var descricao = publicacaoArray.getJSONObject(i).getString("descricao")
            listarPublicacao.add(Publicacao(id, titulo, descricao))

        }
        return listarPublicacao
    }

    fun post (json: String, token: String)  : RespostaPublicacao {

        // definindo o cabeçalho da requisição
        val headerHttp = MediaType.parse("application/json; charset=utf-8")

        // criando o bodu=y da requisiçao
        val body = RequestBody.create(headerHttp, json)


        // construindo a requisição ao servidor
        var request = Request.Builder().url(URL).addHeader("Authorization", "Bearer ${token}").post(body).build()

        val response = client.newCall(request).execute()

        val gson = Gson()

        var respostaPublicacao = gson.fromJson(response.body()!!.string(), RespostaPublicacao::class.java)


        return respostaPublicacao

    }
}