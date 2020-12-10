package com.example.webgamescenter.http

import com.example.webgamescenter.model.RespostaUsuario
import com.example.webgamescenter.model.Usuario
import com.google.gson.Gson
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody


class HttpHelperLogin {

    // determina a url a ser solicitada
    val URL = "http://192.168.100.106:3333/sessao"

    // criando um cliente http
    val usuario = OkHttpClient()

    fun login(json: String) : RespostaUsuario {

        // definindo o cabeçalho da requisição
        val headerHttp = MediaType.parse("application/json; charset=utf-8")

        // criando o bodu=y da requisiçao
        val body = RequestBody.create(headerHttp, json)

        // construindo a requisição ao servidor
        var request = Request.Builder().url(URL).post(body).build()

        val response = usuario.newCall(request).execute()

//        println("############# aqui é o post do login  " + response.body()!!.string())

        val gson = Gson()

        val respostaUsuario = gson.fromJson(response.body()!!.string(), RespostaUsuario::class.java)

        return respostaUsuario

    }



}