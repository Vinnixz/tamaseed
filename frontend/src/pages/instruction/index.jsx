import React from 'react';
import * as Css from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

export default function Instruction(){
  return (
    <Css.Body>
      <Css.Instruction>
        <Css.Title> Bem-vindo ao Tamagoseed</Css.Title>
        <Css.Subtitle>
          <p>Aqui estão umas breves orientações de uso do app</p>
        </Css.Subtitle>
        <Css.Back>
          <Css.Orientação>#Orientações</Css.Orientação>
          <Css.Instruction1>
            <FaCheckCircle />É recomendado a permissão do acesso para enviar
            notificações e oferecer dicas personalizadas sobre o cuidado de suas
            plantas para garantir uma experiência completa.
          </Css.Instruction1>
          <Css.Instruction1>
            <FaCheckCircle />É recomendado a permissão do acesso para enviar
            notificações e oferecer dicas personalizadas sobre o cuidado de suas
            plantas para garantir uma experiência completa.
          </Css.Instruction1>
          <Css.Instruction1>
            <FaCheckCircle />É recomendado a permissão do acesso para enviar
            notificações e oferecer dicas personalizadas sobre o cuidado de suas
            plantas para garantir uma experiência completa.
          </Css.Instruction1>
          <Css.NextButton> <Link to="/home">Próxima</Link></Css.NextButton>
        </Css.Back>
        
      </Css.Instruction>
    </Css.Body>
  );
}
