import React from 'react';
import * as Css from "./style";
import logo from "../../img/logo.svg";
import { FaSearch } from "react-icons/fa";

export default function Search(){
    return (
      <Css.Container>
      <Css.Body>
      <Css.Top>
          <Css.Logo> 
            <img src={logo} alt="LogoTamagoseed" />
          </Css.Logo>
      </Css.Top>
      
      <Css.Formulario>
        <Css.TitleSearch> 
          <h1> Qual planta você está procurando</h1>
        </Css.TitleSearch>
        <Css.FormComponent>
        <Css.Input>
        <FaSearch />
          <input
            type="text"
            placeholder="Digite a planta"
          />
        </Css.Input>
        </Css.FormComponent>
      </Css.Formulario>
      </Css.Body>
      </Css.Container>
    );
}
