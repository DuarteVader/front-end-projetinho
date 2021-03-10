import React,{useState} from 'react';
import UIButton from 'components/UI/Button/Button';
import api from '../../../services/api';
import {login} from '../../../services/auth';


import './Register.css';

const UserRegister = () => {
  
  const [name, setNome] = useState('') 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [CPF, setCpf] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const response = await api.post('/auth/register', {name, email, password, CPF})

    if(response.data.token)
      console.log("Cadastrado!")
      login(response.data.token)
      window.location.href = '/listar';
  }


  return (
    <div className="user-login">
      <h1 className="user-login__title">Register</h1>
      <form autoComplete="nope">
      <div className="user-login__form-control">
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" name="nome" autoComplete="off" onChange={ (event) => setNome(event.target.value)} value = {name} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" onChange={ (event) => setEmail(event.target.value)} value = {email} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="cpf">CPF</label>
          <input id="cpf" type="text" name="cpf" autoComplete="off" onChange={ (event) => setCpf(event.target.value)} value = {CPF} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" onChange={ (event) => setPassword(event.target.value)} value = {password} />
        </div>
        <UIButton
          theme="contained-green"
          className="user-login__submit-button"
          rounded
          handleSubmit = {handleSubmit}
        >
          Cadastrar
        </UIButton>
        
      </form>
    </div>
  );
};

export default UserRegister;
