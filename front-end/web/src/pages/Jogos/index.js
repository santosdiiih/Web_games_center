import React from 'react';
import { Form } from 'reactstrap';
import Foto from '../../assets/Raster.jpeg';

import './styles.css';

function home() {
  return (
      <>
        <div className="body">
            <header>
                <div className="containernavegacao">
                    <div className="Container pesquisa-genero">
                        <input type="text" className="text-input" placeholder="Pesquise seu Jogo"></input>
                        <select className="select-input">
                            <option>Selecione outra categoria</option>
                        </select>
                    </div>
                 <div className="">
                    <nav className="navegacao">
                        <ul className="ul-menu-nav">
                            <li className="li-menu-navbar">Jogos Mobile</li>
                            <li className="li-menu-navbar">Home</li>
                            <li className="li-menu-navbar">Perfil</li>
                        </ul>
                    </nav>
                 </div>
                </div>
            </header>
            <div className="container mt-4">
                <div className="card-container mt-4 mb-4">
                    <div className="card-color">
                        <div className="title text-center">Nome do Jogo</div>
                        <div><img className="img-type-size" src={Foto} alt="Jogo" /></div>
                        <div className="text-center"></div>
                        
                    </div>
                    <div className="text-center mt-1">
                        <button className="input-button">Entrar</button>
                    </div>
                </div>
        
            </div>
        </div>
      </>
  );
}

export default home;