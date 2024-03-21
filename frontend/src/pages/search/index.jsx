import React from 'react';
import * as Css from "./style";
import logo from "../../img/logo.svg";

export default function Search(){
    return (
      <Css.Body>
          <Css.Logo> 
            <img src={logo} alt="LogoTamagoseed" />
          </Css.Logo>
      </Css.Body>
    );
}
