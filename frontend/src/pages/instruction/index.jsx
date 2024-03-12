import * as Css from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Instruction() {
  return (
    <Css.Body>
      <Css.Instruction>
        <Css.Title> Bem-vindo ao Tamagoseed</Css.Title>
        <Css.Subtitle>
          <p>Aqui estão umas breves orientações de uso do app</p>
        </Css.Subtitle>
        <Css.Back>
          <Css.Orientação> <h2> #Orientações </h2></Css.Orientação>
          <Css.Instruction1>
            <FaCheckCircle /> <p> É recomendado a permissão do acesso para enviar notificações e oferecer dicas personalizadas sobre o cuidado de suas plantas para garantir uma experiência completa.</p>
          </Css.Instruction1>
          <Css.Instruction1>
            <FaCheckCircle /> <p> Para assegurar o desenvolvimento saudável de sua planta, você precisará colaborar de maneira efetiva. </p>
          </Css.Instruction1>
          <Css.Instruction1>
            <FaCheckCircle /> <p> Agradecemos por tomar essa iniciativa e se preocupar mais com os cuidados da sua planta, seja muito bem vindo ao Tamagoseed! </p>
          </Css.Instruction1>
          <Css.NextButton> <Link to="/home">Próxima</Link></Css.NextButton>
        </Css.Back>
        
      </Css.Instruction>
    </Css.Body>
  );
}
