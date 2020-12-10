package com.example.webgamescenter.http

import com.example.webgamescenter.model.RespostaPublicacao
import okhttp3.OkHttpClient
import okhttp3.Request

class HttpHelperPublicacao {

    // definir a URL do servidor
    val URL = "http://192.168.100.106:3333/postagens"

    // criando um cliente que dispara a requisição
    val client = OkHttpClient()

    fun getPublicacao(token: String) : String? {

        // criando uma requisição GET
        val request = Request.Builder()
            .url(URL)
            .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTYwNjMxMDU3Mn0.xfZsjHOPh69NQb_9ghUD2DsOqWQd_MczY8l1asTAsSM")
            .get().build()

        // enviar a requisição para o servidor
        val response = client.newCall(request).execute()

        //extraindo o body da requisicao
        val responseBody = response.body()

        // exibir o body da requisição
        //if(responseBody != null ){
            val json = responseBody!!.string()
            println("RESPOSTA ========> " + json)
       // }
        return json
    }

}