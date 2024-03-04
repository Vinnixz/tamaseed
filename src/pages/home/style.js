import { styled } from "styled-components";
import background from '../../img/FundoHome.png';

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
`;

export const Textao = styled.h1`
  display: flex;
  align-items: center;
  font-style: bold;
  color: white;
`;

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 50vh;
  input[type="email"],
  input[type="password"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button:hover {
    background-color: white;
  }
`;
export const LoginButton = styled.button`
  background-color: white;
  border: none;
  color: #2f973a;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1.5rem;
  transition: background-color 0.5s ease;
`;
export const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
