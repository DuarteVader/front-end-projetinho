import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register'
import Atualizar from '../pages/Atualizar/Atualizar'
import Listar from '../pages/Listar/Listar'

const PagesRoot = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/atualizar" exact component={Atualizar} />
      <Route path="/Listar" exact component={Listar} />
    </Switch>
  </Router>
)


export default PagesRoot;