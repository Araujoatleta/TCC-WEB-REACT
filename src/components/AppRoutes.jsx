
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from '../templates/Login/Cadastro';
import Carrossel from '../templates/Login/Carrosel';
import Login from '../templates/Login/Login';
import Senha from '../templates/Login/Senha';
import Admin from '../templates/Login/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/carrossel" component={Carrossel} />
        <Route path="/login" component={Login} />
        <Route path="/senha" component={Senha} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Carrossel} />
      </Switch>
    </Router>
  );
}

export default App;