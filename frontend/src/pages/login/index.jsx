import * as Css from "./style";
import { FaKey } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import logo from "../../img/logo.svg";
import React, { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/registrar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
      });

      if (response.ok) {
        console.log('Usuário registrado com sucesso!');
        // Redirecionar para outra página, se necessário
      } else {
        console.error('Falha ao registrar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
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
                value={email} 
                onChange={(e) => setEmail(e.target.value)}  // Associar o valor do campo de entrada ao estado 'email'
              />
            </Css.InputContainer>
            <Css.InputContainer>
              <FaKey />
              <input 
                type="text" 
                placeholder="Nome"
                value={nome} 
                onChange={(e) => setNome(e.target.value)}  // Associar o valor do campo de entrada ao estado 'nome'
              />
            </Css.InputContainer>
          </Css.FormComponent>
        </Css.LoginContainer>
        <Css.Login>
          <Css.LoginButton onClick={handleRegister}>Registrar</Css.LoginButton>
          <p>
            Já tem login?
            <b>
              <Link to="/login"> Faça login</Link>
            </b>
          </p>
        </Css.Login>
      </Css.Form>
    </Css.Container>
  );
}
