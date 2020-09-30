import React, { useState } from 'react';
import Foto from '../../assets/logo-type-web.png';
import Perfil from '../../assets/Perfil.jpg';
 import './styles.css';


const Home = (props)=> {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
      <>
        <div className="page-wraper">
            <div className="content-wraper">
                <div className="background-menu-lateral">
                    <ul className="ul">
                        <li className="svg-menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg></li>
                        <li className="svg-menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></li>
                        <li className="svg-menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" class="svg-inline--fa fa-gamepad fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg></li>
                        <li className="svg-menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg></li>
                        <li className="svg-menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="svg-inline--fa fa-headset fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg></li>
                    </ul>
                </div>
                <div className="content-area">
                    <nav className="navbar-width">
                        
                        <div><img src={Foto} className="foto-logo" alt="Logo" /></div>
                        <div className="nav-menu-assets">
                            <button className="input-button">Seja Premium</button>
                            <div className="nav-itens">
                                <img src={Perfil} className="Perfil-img" alt="Perfil"/>
                                <h6 className="usuario-nome">Seu Nome</h6>
                            </div>
                            <div className="nav-itens">
                                <div className="svg-menu-1"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg></div>
                                <h6 className="usuario-normal">Sair</h6>
                            </div>
                        </div>
                    </nav>
                <div className="container-area-conteudo">
                    <div></div>
                    <div className="area-conteudo mt-4">
                            <div className="container-pergunta">
                                <div className="pergunta-top-side">
                                    <div><img src={Perfil} className="FotoPublicao" alt="Sua foto de perfil" /></div>
                                    <div><textarea className="text-area-postagen" placeholder="O que você esta pensando"> </textarea></div>
                                </div>
                                <div className="pergunta-buttom-side">
                                    <div className="area-imagem-pergunta text-white ml-3 mt-3">
                                        <div className="itens-aligners">
                                            <div className="padrao-svg"><svg aria-hidden="true"  focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg></div>
                                            <h6 className="text-imagem">Adiciona Imagem</h6>
                                        </div>
                                    </div>
                                    <button className="input-button">Publicar</button>
                                </div>
                            </div>
                            <div className="container-publicacao">
                                <div className="top-side-publicao">
                                    <div><img src={Perfil} alt="Foto perfil" className="foto-perfil-publicacao" /></div>
                                    <div><h6 className="text-white texto-nickname">@PEZINDOGRAU</h6></div>
                                    <div><p className="text-dark texto-horario">Publicado as 25:55</p></div>
                                    <div className="svg-menu-2"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg></div>
                                </div>
                                <div className="container-publicacao-texto">
                                    <p className="text-area">CHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO DALECHAMA NO D</p>
                                </div>
                                <div className="Imagem-publicacao mb-4">
                                    <img src={Perfil} className="foto-publicacao" alt="Publicação"/>
                                </div>
                                <footer className="mb-4 text-white comentarios-build">
                                    <h6 className="pl-1 py-4">Comentarios</h6>
                                    <section>
                                        <header>
                                            <img src={Perfil} alt="Foto perfil" />
                                            <strong>Afonso Peres</strong>
                                        </header>
                                        <p>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição</p>
                                    </section>
                                    <form className="novo-comentario">
                                        <textarea></textarea>
                                        <button>Enviar</button>
                                    </form>
                                </footer>
                            </div>
                        </div>
                        <div className="container-propaganda">
                            <div className="propagando">
                                PROPAGANDA
                            </div>
                            <div className="rede-social">
                                REDES SOCIAIS
                            </div>
                            <div className="container-chat">
                                <div className="chat-header text-white ml-2"><h6 className="text-header">Mensagem</h6></div>
                                <div className="svg-item-chat">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default Home;