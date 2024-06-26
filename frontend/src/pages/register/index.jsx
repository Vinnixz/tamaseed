import React, { useEffect } from 'react';
import { apiUrl } from "../../utils/consts";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import * as Css from "./style";
import { FaKey } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from "../../img/logo.svg";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleSubmit = async (event) => {
  
      const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        confirm_email: document.getElementById('confirm_email').value,
        senha: document.getElementById('senha').value,
        confirm_senha: document.getElementById('confirm_senha').value
      };
  
      try {
        console.log(JSON.stringify(data));
        const response = await fetch(`${apiUrl}/registrar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          alert('Dados enviados com sucesso!');
          navigate('/');
        } else {
          alert('Erro ao enviar dados.');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    };
  
    const formulario = document.getElementById('formulario');
    if (formulario) {
      formulario.addEventListener('submit', handleSubmit);
    }
  
    return () => {
      const formulario = document.getElementById('formulario');
      if (formulario) {
        formulario.removeEventListener('submit', handleSubmit);
      }
    };
  }, [navigate]);

  return (
    <Css.Container>
      <Css.Logo> 
        <img src={logo} alt="LogoTamagoseed"></img>
      </Css.Logo>
      
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form id="formulario">
        <Css.LoginContainer>
          <Css.FormComponent>
          <Css.InputContainer>
              <MdEmail />
              <input type="text" placeholder="Nome" id="nome"></input>
            </Css.InputContainer>
            <Css.InputContainer>
              <MdEmail />
              <input type="email" placeholder="Email" id="email"></input>
            </Css.InputContainer>
            <Css.InputContainer>
              <MdEmail />
              <input type="email" placeholder="Confirmar email" id="confirm_email"></input>
            </Css.InputContainer>
            <Css.InputContainer>
              <FaKey />
              <input type="password" placeholder="Senha" id="senha"></input>
            </Css.InputContainer>
            <Css.InputContainer>
              <FaKey />
              <input type="password" placeholder="Confirmar senha" id="confirm_senha"></input>
            </Css.InputContainer>
          </Css.FormComponent>
        </Css.LoginContainer>
        <Css.Login>
          <Css.LoginButton type="submit">Login</Css.LoginButton>
          <p>
            Já se cadastrou? 
            <b>
              <Link to="/"> Logue aqui</Link>
            </b>
          </p>
        </Css.Login>
      </Css.Form>
    </Css.Container>
  );
}