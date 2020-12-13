package com.example.webgamescenter.http

import com.example.webgamescenter.model.Publicacao
import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONArray

class HttpHelperPublicacao {

    fun getPublicacao(token: String): List<Publicacao> {

        // definir a URL do servidor
        val URL = "http://192.168.100.106:3333/postagens"

        // criando um cliente que dispara a requisição
        val client = OkHttpClient()

        // criando uma requisição GET
        val request = Request.Builder()
            .url(URL)
            .addHeader("Authorization", "Bearer ${token}")
            .get().build()

        // enviar a requisição para o servidor
        val response = client.newCall(request).execute()

        //extraindo o body da requisicao
        val responseBody = response.body()

        var listarPublicacao = ArrayList<Publicacao>()

        var publicacaoJson = responseBody!!.string()

        var publicacaoArray = JSONArray(publicacaoJson)

        for (i in 0 until publicacaoArray.length()){
            val publicacaoJson = publicacaoArray.getJSONObject(i)
            val publicacao = Publicacao(
                publicacaoJson.optInt("id"),
                publicacaoJson.optString("titulo"),
                publicacaoJson.optString("descricao"),
                publicacaoJson.optString("usuario_id")
            )
            listarPublicacao.add(publicacao)
        }

        return listarPublicacao
    }


}