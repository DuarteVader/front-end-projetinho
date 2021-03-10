import React,{useState} from 'react';
import UIButton from 'components/UI/Button/Button';
import api from '../../../services/api';

import {login} from '../../../services/auth';

import './Login.css';

const UserLogin = () => {
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const response = await api.post('/auth/login', {usuario, password})

    if(response.data.token)
      console.log("Logado!")
      login(response.data.token)
      window.location.href = '/home';
      
  }


  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail ou CPF</label>
          <input id="email" type="text" name="email" autoComplete="off" onChange={ (event) => setUsuario(event.target.value)} value = {usuario} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" onChange={ (event) => setPassword(event.target.value)} value = {password} />
        </div>
        <UIButton
          theme="contained-green"
          className="user-login__submit-button"
          rounded
          handleSubmit = {handleSubmit} href={'/Home'}
        >
          Entrar
        </UIButton>
        
      </form>
    </div>
  );
};

export default UserLogin;
