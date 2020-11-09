import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Foto from '../../assets/logo-type-web.png';
import Perfil from '../../assets/Perfil.jpg';
import Menu from '../Components/ComponentsMenu/Menu';
import Menutopside from '../Components/Menutopside';
import './styles.css';
import { useEffect } from 'react';
import { api } from "../../services/api";

const CardPost = () => {

    return (
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
                <img src={Perfil} className="foto-publicacao" alt="Publicação" />
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
    )
}


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory;
    // const [mensagem, setMensagem] = useState("");
    const [postagem, setPostagem] = useState([]);

    useEffect(() => {

        const carregarPostagem = async () => {
            try {
                const retorno = await api.get("/postagens");
                setPostagem(retorno.data)
            } catch (error) {
                console.log(error)
            }
        };
        carregarPostagem();
    }, []);


    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="page-wraper">
                <div className="content-wraper">
                    <div className="background-menu-lateral">
                        <Menu />
                    </div>
                    <div className="content-area">
                        <Menutopside />
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
                                                <div className="padrao-svg"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg></div>
                                                <h6 className="text-imagem">Adiciona Imagem</h6>
                                            </div>
                                        </div>
                                        <button className="input-button">Publicar</button>
                                    </div>
                                </div>

                                {postagem.map((post) => (
                                    <CardPost post={post} />
                                ))}

                            </div>
                            <div className="container-propaganda">
                                <div className="propagando">
                                    PROPAGANDA
                            </div>
                                <div className="rede-social">
                                    REDES SOCIAIS
                            </div>

                                {/* <div className="container-chat">
                                    <div id="live-chat">
                                        <header className="clearfix">
                                            <h4>Mensagens</h4>
                                        </header>
                                        <div className="chat">
                                            <div className="chat-history">
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;