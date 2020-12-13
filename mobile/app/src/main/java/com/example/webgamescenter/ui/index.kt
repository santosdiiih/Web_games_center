package com.example.webgamescenter.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.View
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.webgamescenter.R
import com.example.webgamescenter.adapter.PublicacaoReciclerAdapter
import com.example.webgamescenter.http.HttpHelperPublicacao
import kotlinx.android.synthetic.main.activity_index.*
import kotlinx.android.synthetic.main.activity_loja.*
import kotlinx.android.synthetic.main.toolbar.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.uiThread

class index : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_index)

        insertToolbar()
        novoPost.setOnClickListener(this)


        val token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTYwNjMxMDU3Mn0.xfZsjHOPh69NQb_9ghUD2DsOqWQd_MczY8l1asTAsSM"

        // resgata as informaçoes gravadas no banco
        doAsync {
            val http = HttpHelperPublicacao()
            val retorno = http.getPublicacao(token)

            println("###### RETORNO INDEX " + retorno)

            uiThread {
                val recyclerView = recyclerViewPublicacao
                recyclerView.layoutManager = LinearLayoutManager(applicationContext)
                recyclerView.adapter = PublicacaoReciclerAdapter(retorno)
            }

        }

    }


    private fun insertToolbar() {
        setSupportActionBar(toolbar)
        supportActionBar!!.title = "Publicações"
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_toolbar, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.menuLoja -> {
                val intent = Intent(this, loja::class.java)
                startActivity(intent)
                //Toast.makeText(this, "menu Loja", Toast.LENGTH_SHORT).show()
            }
            R.id.menuPerfil -> {
                val intent = Intent(this, perfilUsuario::class.java)
                startActivity(intent)
            }
            else -> {
                onBackPressed()
            }

        }

        return true
    }

    override fun onClick(view: View) {
        val id = view.id
        when (id) {
            R.id.novoPost -> {
                val intent = Intent(this, novaPublicacao::class.java)
                startActivity(intent)
            }
        }
    }
}
