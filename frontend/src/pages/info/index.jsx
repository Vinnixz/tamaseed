import React, { useContext } from "react";
import * as Css from "./style";
import { Body, Container, Logo, Top } from "../home/style";
import logo from "../../img/logo.svg";
import Slider from "react-slick";
import alface from "../../img/sementes/alface.png";
import { IoMdHeart } from "react-icons/io";
import { RiBubbleChartFill } from "react-icons/ri";

export default function Info(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <Top>
        <Logo>
          <img src={logo} alt="LogoTamagoseed" />
        </Logo>
      </Top>
      <Css.InfoHeader>
        <h2>Aprenda como cuidar da sua {props.seedName} <IoMdHeart /></h2>
        <img src={alface} />
      </Css.InfoHeader>
      <Css.Info>
      <Slider {...settings}>
        <Css.InfoSeed>
          <h2>Descrição da semente</h2>
          <p><RiBubbleChartFill /> {props.seedDescription}</p>
        </Css.InfoSeed>
        <Css.InfoSeed>
          <h2>Como cuidar</h2>
          <p><RiBubbleChartFill /> {props.seedCare}</p>
        </Css.InfoSeed>
        <Css.InfoSeed>
          <h2>Materias precisos</h2>
          <p><RiBubbleChartFill /> {props.seedMaterial}</p>
        </Css.InfoSeed>
      </Slider>

      </Css.Info>
    </>
  );
}
