import * as Css from "./style";

export default function Home() {
  return (
    <Css.Container>
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form>
      <Css.FormComponent>
          <input type="email" placeholder="Digite seu email"></input>
          <input type="password" placeholder="Digite sua senha"></input>
      </Css.FormComponent>
          <Css.Login>
            <Css.LoginButton>Login</Css.LoginButton>
            <p>
              Não tem login?<b>Registre-se</b>
            </p>
          </Css.Login>
        </Css.Form>
    </Css.Container>
  );
}
