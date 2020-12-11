package com.example.webgamescenter.ui

import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter.*
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.AppCompatSpinner
import com.example.webgamescenter.model.Estado
import com.example.webgamescenter.model.Usuario
import com.example.webgamescenter.R
import com.example.webgamescenter.http.HttpHelperEstado
import com.example.webgamescenter.http.HttpHelperLogin
import com.example.webgamescenter.http.HttpHelperUsuario
import com.example.webgamescenter.model.NovoUsuario
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_cadastro_de_usuario.*
import kotlinx.android.synthetic.main.toolbar.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.toast
import org.jetbrains.anko.uiThread
import android.widget.ArrayAdapter as ArrayAdapter

class cadastroDeUsuario : AppCompatActivity(), View.OnClickListener, AdapterView.OnItemSelectedListener  {


    private lateinit var sppinerEstado: AppCompatSpinner
    private var estadoList = listOf<Estado>()
    private var sppinerAdapter: ArrayAdapter<Estado>? = null
    private lateinit var selectdEstado: Estado

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
       setContentView(R.layout.activity_cadastro_de_usuario)

        insertToolbar()
        buttonAbrirGaleria.setOnClickListener(this)
        buttonCadastro.setOnClickListener(this)

        // instanciar o sppiner
        sppinerEstado = findViewById(R.id.cadastroSpinnerEstado)

        preencherSpinnerEstado()

        sppinerEstado.onItemSelectedListener = this

    }


    private fun preencherSpinnerEstado() {

        doAsync {

            estadoList = HttpHelperEstado().getEstados()

            uiThread {
                sppinerAdapter = ArrayAdapter(applicationContext, android.R.layout.simple_expandable_list_item_1, estadoList)
                sppinerEstado.adapter = sppinerAdapter
            }
        }

    }
    private fun objetoUsuario() {

        // criando um objeto usuario
        var usuario = NovoUsuario()
        usuario.primeiro_nome = cadastroNome.text.toString()
        usuario.ultimo_nome = cadastroUltimoNome.text.toString()
        usuario.data_de_nascimento = cadastroDataNascimento.text.toString()
        usuario.senha = cadastroSenha.text.toString()
        usuario.email = cadastroEmail.text.toString()
        usuario.nickname = cadastroNickname.text.toString()
        usuario.sexo_id = "1"
        usuario.estado_id =  selectdEstado.id.toString()


        var gson = Gson()

        // convertendo o objeto usuario em um gson
        var usuarioJson = gson.toJson(usuario)

        println("########## usuarioJson" + usuarioJson)

        doAsync {
            val http = HttpHelperUsuario()
            val retorno = http.post(usuarioJson)

            uiThread {
               if(!(retorno.token.isEmpty())){
                   val intent = Intent(applicationContext, loginDeUsuario::class.java)
                   toast("Usuario Criado com Sucesso!!")
                   startActivity(intent)
                   limpaForm()
               }
                else{
                   toast("Usuario ja cadastro")
               }
            }
        }

    }

    private fun insertToolbar() {
        setSupportActionBar(toolbar)
        supportActionBar!!.title = "Novo cadastro"
    }

    override fun onClick(view: View) {
        val id = view.id

        when (id) {
            R.id.buttonAbrirGaleria -> {
                val intent = Intent(Intent.ACTION_GET_CONTENT)
                intent.type = "image/*"
                startActivityForResult(intent, 5000)
            }
            R.id.buttonCadastro -> {
                if(validaForm()){

                    objetoUsuario()

                }
            }
        }
    }

    private fun limpaForm() {
        cadastroNome.setText("")
        cadastroEmail.setText("")
        cadastroSenha.setText("")
        cadastroNickname.setText("")
        cadastroDataNascimento.setText("")
        cadastroUltimoNome.setText("")

    }

    private fun validaForm(): Boolean {
        var valida = true

        if(cadastroNome.length() < 3){
            inputTextCadastroNome.isErrorEnabled = true
            inputTextCadastroNome.error = "É necessario digitar seu nome"
            valida = false
        }
        else{
            inputTextCadastroNome.isCounterEnabled = false
            inputTextCadastroNome.error = null
        }
        if(cadastroEmail.length() < 3){
            inputTextcadastroEmail.isErrorEnabled = true
            inputTextcadastroEmail.error = "É necessario digitar seu email"
            valida = false
        }
        else{
            inputTextcadastroEmail.isCounterEnabled = false
            inputTextcadastroEmail.error = null
        }

        if(cadastroSenha.length() < 3){
            inputTextcadastroSenha.isErrorEnabled = true
            inputTextcadastroSenha.error = "É necessario digitar sua senha"
            valida = false
        }
        else{
            inputTextcadastroSenha.isCounterEnabled = false
            inputTextcadastroSenha.error = null
        }

        if(cadastroDataNascimento.length() < 3){
            inputTextCadastroDataNascimento.isErrorEnabled = true
            inputTextCadastroDataNascimento.error = "É necessario digitar sua data de nascimento"
            valida = false
        }
        else{
            inputTextCadastroDataNascimento.isCounterEnabled = false
            inputTextCadastroDataNascimento.error = null
        }

        if(cadastroNickname.length() < 3){
            inputTextlayoutNickname.isErrorEnabled = true
            inputTextlayoutNickname.error = "É necessario digitar seu nickname"
            valida = false
        }
        else{
            inputTextlayoutNickname.isCounterEnabled = false
            inputTextlayoutNickname.error = null
        }
        if(cadastroUltimoNome.length() < 3){
            inputTextCadastroNomeUltimo.isErrorEnabled = true
            inputTextCadastroNomeUltimo.error = "É necessario digitar seu ultimo nome"
            valida = false
        }
        else{
            inputTextCadastroNomeUltimo.isCounterEnabled = false
            inputTextCadastroNomeUltimo.error = null
        }

        return valida
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if(data != null){
            val inputString = contentResolver.openInputStream(data.data!!)
            val bitmap = BitmapFactory.decodeStream(inputString)
            fotoPerfilUsuario.scaleType = ImageView.ScaleType.CENTER_CROP
            fotoPerfilUsuario.setImageBitmap(bitmap)
        }
    }

    override fun onNothingSelected(p0: AdapterView<*>?) {
        //     QUANDO NADA FOR SELECIONADO AQUI REALIZA UMA AÇAO
    }

    override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
        selectdEstado = sppinerEstado.selectedItem as Estado

    }
}
