import { styled } from "styled-components";
import Flor from "../../img/flor.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-image: src(${Flor});
  height: 100vh;
  background-color: #2f973a;
  font-family: 'Madimi One', sans-serif;
`;

export const Logo = styled.div`
  display: flex;
`;


export const Textao = styled.h1`
  display: flex;
  align-items: center;
  font-style: bold;
  color: white;
  font-family: 'Madimi One', sans-serif;
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 7vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  background-color: white;
  height: 40px;
  border-radius:8px;
input{
  border:none;
  border-left: 1px solid #2f973a;;
  margin-left:10px;
  height: 20px;
  outline: none;
}
::placeholder{
  padding-left: 1rem;
}
svg{
  color:#2f973a;;
  margin-left:15px;
  height:30px;
}
;
`
export const Icon = styled.div`
`

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
  gap: 15px;
`;

export const LoginContainer = styled.div`
 display: flex;
 margin-top: 10vh;
`