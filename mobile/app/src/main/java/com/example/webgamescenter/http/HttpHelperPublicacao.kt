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
}