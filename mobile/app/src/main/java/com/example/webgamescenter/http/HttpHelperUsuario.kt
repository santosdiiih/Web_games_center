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
    val URL = "http://192.168.100.106:3333/usuarios"

    // criando um cliente que dispara a requisição
    val client = OkHttpClient()


    fun post (json: String)  : RespostaNovoUsuario {

        //println(" ##### entrou ")

        // definindo o cabeçalho da requisição
        val headerHttp = MediaType.parse("application/json; charset=utf-8")

        // criando o bodu=y da requisiçao
        val body = RequestBody.create(headerHttp, json)

        println("%%%5% passou no body " + json)

        // construindo a requisição ao servidor
        var request = Request.Builder().url(URL).post(body).build()

        val response = client.newCall(request).execute()

        val gson = Gson()

        var respostaUsuario = gson.fromJson(response.body()!!.string(), RespostaNovoUsuario::class.java)

        println("############# aqui é o post de novo usuario  " + respostaUsuario)

        return respostaUsuario

    }



}