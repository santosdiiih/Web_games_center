package com.example.webgamescenter.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.webgamescenter.R
import com.example.webgamescenter.model.Publicacao

class PublicacaoReciclerAdapter(var listaPublicacao: List<Publicacao>) : RecyclerView.Adapter <PublicacaoReciclerAdapter.PublicacaoViewHolder> () {


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PublicacaoViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.layout_card_publicacao_view_holder, parent, false)

        return PublicacaoViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return  listaPublicacao.size
    }

    override fun onBindViewHolder(holder: PublicacaoViewHolder, position: Int) {
        val publicacao = listaPublicacao[position]
        holder.bind(publicacao)
    }

    class PublicacaoViewHolder (itemView: View) : RecyclerView.ViewHolder (itemView) {
        fun bind(publicacao: Publicacao){






        }

    }


}