import * as Css from "./style";

export default function Home() {
  return (
    <Css.Container>
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form>
        <Css.LoginContainer>
          <Css.FormComponent>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha"></input>
          </Css.FormComponent>
        </Css.LoginContainer>  
            <Css.Login>
              <Css.LoginButton>Login</Css.LoginButton>
              <p>
                Não tem login?<b><a href="../home/index.jsx"> Registre-se</a></b>
              </p>
            </Css.Login>
        </Css.Form>
    </Css.Container>
  );
}
