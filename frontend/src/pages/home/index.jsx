import * as Css from "./style";
import { FaKey } from "react-icons/fa6";


export default function Home() {
  return (
    <Css.Container>
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form>
        <Css.LoginContainer>
          <Css.FormComponent>
          <Css.InputContainer>
            <FaKey />
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
              <a href="../home/index.jsx"> Registre-se</a>
            </b>
          </p>
        </Css.Login>
        
      </Css.Form>
    </Css.Container>
  );
}
