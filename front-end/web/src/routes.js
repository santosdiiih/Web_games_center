import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Perfil from './pages/Perfil';
import Jogos from './pages/Jogos';
import Index from './pages/index'


// import { Container } from './styles';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Index />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/Perfil">
                <Perfil />
            </Route>
            <Route exact path="/Loja">
                <Loja />
            </Route>
            <Route exact path="/Jogos">
                <Jogos />
            </Route>
            
        </Switch>
      </BrowserRouter>
  );
}

export default Router;