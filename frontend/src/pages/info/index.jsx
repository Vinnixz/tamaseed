import React, { useContext } from "react";
import { SeedContext } from "../../context/seedContext";
import * as Css from "./style";
import { Body, Container, Logo, Top } from "../home/style";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import { IoDocumentText } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Info(props) {
  const seeds = useContext(SeedContext);
  const infoSeed = seeds.find((seed) => seed.nome_comum === props.seedName);
  return (
    <Container>
      <Body>
        <Top>
          <Logo>
            <img src={logo} alt="LogoTamagoseed" />
          </Logo>
        </Top>
        <Css.InfoHeader>
          <h2>Aprenda a como cuidar da sua {infoSeed.nome_comum}</h2>
          <Css.InfoCare>
            <p>
              Aqui você aprendera os cuidados básicos da sua plantinha, temos
              dicas, instruções e cuidados ideais
            </p>
          </Css.InfoCare>
        </Css.InfoHeader>
        <Css.InfoBody>
          <Css.InfoBodyGrid>
            <Css.InfoButton>
              <Css.Ballon>
                <IoDocumentText />
              </Css.Ballon>
              <p>Aprenda como cuidar</p>
            </Css.InfoButton>
            <Css.ButtonGo>
              <FaArrowAltCircleRight />
            </Css.ButtonGo>
          </Css.InfoBodyGrid>
          <Css.InfoBodyGrid>
            <Css.InfoButton>
              <Css.Ballon>
                <GoAlertFill />  
              </Css.Ballon>
              <p>Cuidados com a planta</p>
            </Css.InfoButton>
            <Css.ButtonGo>
              <FaArrowAltCircleRight />
            </Css.ButtonGo>
          </Css.InfoBodyGrid>
        </Css.InfoBody>
      </Body>
    </Container>
  );
}
