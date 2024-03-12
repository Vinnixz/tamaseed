import * as Css from "./style";
import { FaKey } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import logo from "../../img/logo.svg";


export default function Login() {
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
            <input type="email" placeholder="Email"></input>
        </Css.InputContainer>
        <Css.InputContainer>
            <FaKey />
            <input type="password" placeholder="Senha"></input>
        </Css.InputContainer>
          </Css.FormComponent>
        </Css.LoginContainer>
        <Css.Login>
          <Css.LoginButton>Login</Css.LoginButton>
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
