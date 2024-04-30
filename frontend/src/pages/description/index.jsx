import { Body, Container, Logo, Top } from "../home/style";
import logo from "../../img/logo.svg";
import { SeedContext } from "../../context/seedContext";
import { useContext } from "react";

export default function InfoSeeds(props) {
  const seeds = useContext(SeedContext);
  const infoSeed = seeds.find((seed) => seed.nome_comum === props.seedName);

  return (
    <Container>
      <Body>
        <Top>
          <Logo>
            <img src={logo} alt="LogoTamagoseed" />
          </Logo>
          <h1>{infoSeed.nome_comum}</h1>
          <div>
            <h2>Descrição da semente</h2>
          </div>
          <div>
            <h2>Descrição da semente</h2>
            <p>{infoSeed.nome_comum}</p>
          </div>
        </Top>
      </Body>
    </Container>
  );
}
