import * as Css from "./style";

export default function Home() {
  return (
    <Css.Container>
      <Css.Textao>Bem vindo Florzinha</Css.Textao>
      <Css.Form>
        <input type="text" placeholder="Digite seu nome"></input>
        <input type="email" placeholder="Digite seu email"></input>
        <input type="password" placeholder="Digite sua senha"></input>
        <input type="password" placeholder="Digite sua senha"></input>
      </Css.Form>
    </Css.Container>
  );
}
