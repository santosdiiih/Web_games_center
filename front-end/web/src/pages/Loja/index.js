import React from 'react';
import Foto from '../../assets/logo-type-web.png';
import FotoPerfil from '../../assets/Perfil.jpg';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

 import './styles.css';
import Menu from '../Components/ComponentsMenu/Menu';
import Menutopside from '../Components/Menutopside';

function Loja() {
  return <>
       <div className="page-wraper">
            <div className="content-wraper">
                <div className="background-menu-lateral">
                   <Menu />
                </div>
                <div className="content-area">
                   <Menutopside />
                   <section>
                       <div className="container">
                            <div className="card-gift">
                                <div className="text-center text-white"><h5 className="mt-3">Gift Card</h5></div>
                                <div className="container-imagem-gift-card"><img src={FotoPerfil} alt="" className="foto-img-gift-card" /></div>
                                <div className="text-center mb-2"><button className="input-button">Comprar</button></div>
                            </div>
                       </div>
                   </section>
                </div>
            </div>
        </div>
  </>;
}

export default Loja;