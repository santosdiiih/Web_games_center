import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 import './styles.css';
 import logo from '../../assets/logo-type-web.png';

function index() {
  return (
    <>
        <div className="body">
            <div className="lucides">
                <div className="Container">
                    <div className="login">
                        <div className="Logo">
                            <img src={logo} alt=""></img>
                        </div>
                        <div className="inputs">
                            <input className="input" type="email" placeholder="E-mail" ></input>
                            <input className="input" type="password" placeholder="Senha" ></input>
                            <button className="input-button">GG!</button>
                        </div>
                    </div>  
                    <div className="registro">
                        <div className="register">
                            <h3 className="text-center text-white mb-0">Registre-se</h3>
                            <p className="text-white mb-0 mt-0">Pronto para começar uma aventura?</p>
                            <Form>
                                <FormGroup>
                                    <Label for="E-mail" className="text-white">E-mail</Label>
                                    <Input type="email" name="email" id="E-mail" placeholder="Ex: João@gmail.com"/>
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="Senha" className="text-white">Senha</Label>
                                        <Input type="password" name="senha" id="senha" placeholder="Insira sua senha" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="confirmesenha" className="text-white">Confirme sua senha</Label>
                                        <Input type="password" name="confirmesenha" id="confirmesenha" placeholder="Confirme sua senha" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="primeironome" className="text-white">Primeiro Nome</Label>
                                        <Input type="text" name="primeironome" id="primeironome" placeholder="Insira seu primeiro nome" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="ultimonome" className="text-white">Ultimo Nome</Label>
                                        <Input type="text" name="ultimonome" id="ultimonome" placeholder="Insira seu ultimo nome" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="categoria" className="text-white">Selecione sua categoria</Label>
                                        <Input type="select" name="categoria" id="categoria">
                                            <option>Aventura</option>
                                            <option>Ação</option>
                                            <option>Tiro</option>
                                            <option>Mundo Aberto</option>
                                            <option>Terror</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="nickname" className="text-white">Nick-Name</Label>
                                        <Input type="text" name="nickname" id="nickname" placeholder="Insira seu nickname" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="categoria" className="text-white">Selecione seu sexo</Label>
                                        <Input type="select" name="categoria" id="categoria">
                                            <option value="1">Feminino</option>
                                            <option value="2">Masculino</option>
                                            <option value="3">Outro</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="categoria" className="text-white">Selecione seu estado</Label>
                                        <Input type="select" name="categoria" id="categoria">
                                            <option>Estados</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="text-center"> 
                                    <button className="input-button">Registrar</button>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="divisao">
                            
                        </div>
                        <div className="texto-gamer">
                            <h3 className="text-center">Ola Gamers.</h3>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem   Lorem Lorem Lorem Lorem Lorem Lorem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default index;