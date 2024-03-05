import { styled } from "styled-components";
import background from '../../img/FundoHome.png';
import iconEmail from '../../img/email.svg';
import iconSenha from '../../img/senha.svg';
import logo from '../../img/logo.svg';

export const Container = styled.div`
  display: flex;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: #2f973a;
  width: 430px;
  height: 932px;
  font-family: 'Madimi One', sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const Textao = styled.h1`
  display: flex;
  align-items: center;
  font-style: bold;
  color: white;
  font-family: 'Madimi One', sans-serif;
`;

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 7vh;
  input[type="email"],
  select {
    width: 100%;
    padding: 1.5vh 9vh;
    margin: 1vh 0;
    border: 0.1vh solid #ccc;
    border-radius: 1vh;
    box-sizing: border-box;
    background-image: url(${iconEmail});
    background-repeat: no-repeat;
    background-position:1vh center; 
    padding-left: 5vh;
  }
  input[type="password"],
  select {
    width: 100%;
    padding: 1.5vh 9vh;
    margin: 1vh 0;
    border: 0.1vh solid #ccc;
    border-radius: 1vh;
    box-sizing: border-box;
    background-image: url(${iconSenha});
    background-repeat: no-repeat;
    background-position:1vh center; 
    padding-left: 5vh;
  }
  input[type="email"]::placeholder,
  input[type="password"]::placeholder,
  select::placeholder {
    color: #2f973a;
  }
`;



export const Login = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
  button:hover {
    background-color: white;
  }
`;
export const LoginButton = styled.button`
  background-color: white;
  border: none;
  color: #2f973a;
  padding: 1.5vh 7vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3vh;
  transition: background-color 0.5s ease;
`;
export const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.div`
 display: flex;
 margin-top: 10vh;
`