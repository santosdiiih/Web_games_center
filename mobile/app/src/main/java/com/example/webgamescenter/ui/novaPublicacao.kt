package com.example.webgamescenter.ui

import android.content.Intent
import android.graphics.BitmapFactory
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import com.example.webgamescenter.R
import com.example.webgamescenter.http.HttpHelperPublicacao
import com.example.webgamescenter.http.HttpHelperUsuario
import com.example.webgamescenter.model.NovaPublicacao
import com.example.webgamescenter.model.Publicacao
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_cadastro_de_usuario.*
import kotlinx.android.synthetic.main.activity_nova_publicacao.*
import kotlinx.android.synthetic.main.activity_perfil_usuario.*
import kotlinx.android.synthetic.main.activity_perfil_usuario.buttonAbrirGaleria
import kotlinx.android.synthetic.main.activity_perfil_usuario.fotoPerfilUsuario
import kotlinx.android.synthetic.main.toolbar.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.toast
import org.jetbrains.anko.uiThread

class novaPublicacao : AppCompatActivity(), View.OnClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_nova_publicacao)

        insertToolbar()
        buttonAbrirGaleria.setOnClickListener(this)
        enviarPublicacao.setOnClickListener(this)
    }

    private fun insertToolbar() {
        setSupportActionBar(toolbar)
        supportActionBar!!.title = "Nova Publicação"
    }

    override fun onClick(view: View) {
        val id = view.id

        when (id) {
            R.id.buttonAbrirGaleria -> {
                val intent = Intent(Intent.ACTION_GET_CONTENT)
                intent.type = "image/*"
                startActivityForResult(intent, 5000)
            }
            R.id.enviarPublicacao -> {
                if(validaFor()){
                    objetoPublicacao()
                }
            }
        }
    }

    private fun objetoPublicacao() {
        var publicacao = NovaPublicacao()
        publicacao.titulo = textTituloPublicacao.text.toString()
        publicacao.descricao = textPublicacao.text.toString()

        var gson = Gson()


        // convertendo o objeto usuario em um gson
        var publicacaoJson = gson.toJson(publicacao)

        //println("########## Publicacao" + publicacaoJson)

        val token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTYwNjMxMDU3Mn0.xfZsjHOPh69NQb_9ghUD2DsOqWQd_MczY8l1asTAsSM"

        doAsync {
            val http = HttpHelperPublicacao()
              val retorno = http.post(publicacaoJson, token)

            uiThread {
                toast("Publicação Realizada com Sucesso!!")
                val intent = Intent(applicationContext, index::class.java)
                    startActivity(intent)
                    limpaForm()


            }
        }


    }

    private fun limpaForm() {
       textTituloPublicacao.setText("")
        textPublicacao.setText("")

    }

    private fun validaFor(): Boolean {
        var valida = true

        if (textTituloPublicacao.length() < 3){
            inputTextPublicacaoTitulo.isErrorEnabled = true
            inputTextPublicacaoTitulo.error = "É necessario Digitar um titulo"
        }
        else{
            inputTextPublicacaoTitulo.isCounterEnabled = false
            inputTextPublicacaoTitulo.error = null
        }

        if (textPublicacao.length() < 3){
            inputTextPublicacaoTexto.isErrorEnabled = true
            inputTextPublicacaoTexto.error = "É necessario Digitar o Conteudo"
        }
        else{
            inputTextPublicacaoTexto.isCounterEnabled = false
            inputTextPublicacaoTexto.error = null
        }
        return valida
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (data != null){
            val inputString = contentResolver.openInputStream( data.data!!)
            val bitmap = BitmapFactory.decodeStream(inputString)
            fotoPublicacao.scaleType = ImageView.ScaleType.CENTER_CROP
            fotoPublicacao.setImageBitmap(bitmap)
        }
    }
}