package com.example.webgamescenter.http

import com.example.webgamescenter.model.RespostaNovoUsuario
import com.example.webgamescenter.model.RespostaUsuario
import com.google.gson.Gson
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody

class HttpHelperUsuario {

    // definir a URL do servidor
    val URL = "https://web-center-games.herokuapp.com/usuarios"

    // criando um cliente que dispara a requisição
    val client = OkHttpClient()


    fun post (json: String)  : RespostaNovoUsuario {


        // definindo o cabeçalho da requisição
        val headerHttp = MediaType.parse("application/json; charset=utf-8")

        // criando o bodu=y da requisiçao
        val body = RequestBody.create(headerHttp, json)


        // construindo a requisição ao servidor
        var request = Request.Builder().url(URL).post(body).build()

        val response = client.newCall(request).execute()

        val gson = Gson()

        var respostaUsuario = gson.fromJson(response.body()!!.string(), RespostaNovoUsuario::class.java)


        return respostaUsuario

    }



}