import * as Css from "./style";
import logo from "../../img/logo.svg";
import { SeedContext } from "../../context/seedContext";
import { useContext } from "react";

export default function InfoSeeds(props) {
  const seeds = useContext(SeedContext);
  const infoSeed = seeds.find((seed) => seed.nome_comum === props.seedName);

  return (
    <Css.Container>
      <Css.Body>
        <Css.Top>
          <Css.Logo>
            <img src={logo} alt="LogoTamagoseed" />
          </Css.Logo>
          <h1>{infoSeed.nome_comum}</h1>
          <div>
            <h2>Descrição da semente</h2>
            <p>{infoSeed.nome_comum}</p>
          </div>
        </Css.Top>
      </Css.Body>
    </Css.Container>
  );
}
