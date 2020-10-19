import React from 'react';
import { Button, Form,FormGroup, FormText, Input, Label } from 'reactstrap';
import Foto from '../../assets/logo-type-web.png';
import FotoPerfil from '../../assets/Perfil.jpg';
import Menu from '../Components/ComponentsMenu/Menu';
import Menutopside from '../Components/Menutopside';


import './styles.css';

function Perfil() {
  return <>
        <div className="page-wraper">
            <div className="content-wraper">
                <div className="background-menu-lateral">
                    <Menu />
                </div>
                <div className="content-area">
                    <Menutopside />
                    <div className="container-perfil">
                        <section>
                            <div className="perfil-jogos">
                                <div className="container-jogo-perfil">
                                    <div><img src={FotoPerfil} className="foto-jogo-perfil" alt="" /></div>
                                    <div className="perfil-jogo-container-text text-white"><h6 className="text-center ">Joguinho 1</h6></div>
                                    <div className="svg-normal">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" class="svg-inline--fa fa-sign-in-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path></svg></div>
                                </div>
                                
                            </div>
                        </section>
                        <section>
                            <div className="perfil-perfil">
                                <div className="perfil">
                                    <div>
                                        <img src={FotoPerfil} alt="img perfil" className="img-perfil-foto" />
                                    </div>
                                    <div className="perfil-input">
                                        <Form>
                                            <FormGroup>
                                                <Label for="nome" className="text-white">Nome</Label>
                                                <Input type="text" name="name" id="nome" placeholder="Seu nome" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="nickname" className="text-white">Nick-Name</Label>
                                                <Input type="text" name="nickname" id="nickname" placeholder="Seu Nick-Name" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="E-mail" className="text-white">E-Mail</Label>
                                                <Input type="email" name="E-mail" id="E-mail" placeholder="Seu nome" />
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button className="bg-primary text-center">Salvar Alterações</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
  </>;
}

export default Perfil;