import React, { useState } from 'react';
import * as Css from "./style";
import { FaKey } from "react-icons/fa6";
import { Link } from 'react-router-dom'; 
import { MdEmail } from "react-icons/md";
import logo from "../../img/logo.svg";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.usuario_existe) {
          setLoginMessage('Login feito!');
        } else {
          setLoginMessage('Você não tem login.');
        }
      } else {
        setError('Erro ao fazer login.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <Css.Container>
      <Css.Logo> 
        <img src={logo} alt="LogoTamagoseed"></img>
      </Css.Logo>
      
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form>
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
          {loginMessage && <p>{loginMessage}</p>}
          {error && <p>{error}</p>}
          <p>
            Não tem login?
            <b>
              <Link to="/register"> Registre-se</Link>
            </b>
          </p>
        </Css.Login>
      </Css.Form>
    </Css.Container>
  );
}
