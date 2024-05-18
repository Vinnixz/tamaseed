import React, { useState } from 'react';
import { apiUrl } from "../../utils/consts";
import * as Css from "./style";
import { FaKey } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'; 
import { MdEmail } from "react-icons/md";
import logo from "../../img/logo.svg";
import { login } from '../../api';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
      const response = await login(email, senha);
      const status = response.status;
      
      if (status === 200) {
        navigate('/instruction');
      } else if (status === 401) {
        setError('Email ou senha incorretos');
      } else if (status === 500) {
        setError('Erro interno do servidor. Tente novamente mais tarde.');
      } else {
        setError('Erro desconhecido. Tente novamente mais tarde.');
      }
      setError('Erro ao processar a solicitação. Verifique sua conexão com a internet.');
  }

  return (
    <Css.Container>
      <Css.Logo> 
        <img src={logo} alt="LogoTamagoseed" />
      </Css.Logo>
      
      <Css.Textao>Bem vindo ao Tamagoseed</Css.Textao>
        <Css.LoginContainer>
          <Css.FormComponent>
            <Css.InputContainer>
              <MdEmail />
              <input 
                type="email" 
                placeholder="Email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Css.InputContainer>
            <Css.InputContainer>
              <FaKey />
              <input 
                type="password" 
                placeholder="Senha" 
                id="senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Css.InputContainer>
          </Css.FormComponent>
        </Css.LoginContainer>
        <Css.Login>
          <Css.LoginButton onClick={handleLogin}>Login</Css.LoginButton>
          {error && <p>{error}</p>}
          <p>
            Não tem login?
            <b>
              <Link to="/register"> Registre-se</Link>
            </b>
          </p>
        </Css.Login>
    </Css.Container>
  );
}