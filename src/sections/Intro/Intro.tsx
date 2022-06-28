import * as S from "./Intro.styled";
import { Config } from "./Intro.config";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";

import { socials } from "../../data/socials";

export default function Intro(props: Config) {
  return (
    <S.Intro>
      <S.Curriculo>
        <Button
        text="Currículo" />
      </S.Curriculo>
      
      <S.TextField>
        <h2>Olá <S.Hand>👋</S.Hand>, meu nome é</h2>
        <h1></h1>
        <h2>Sejam bem vindes ao meu portfólio 😎</h2>

        <p>Sou um desenvolvedor web e designer gráfico. Abaixo você encontra um pouco mais sobre mim e alguns de meus projetos favoritos.</p>
        <p>Obrigado por estar aqui! 😄</p>
        
        <Button text="Contato"/>
      </S.TextField>

      <Dropdown icons={socials} />
    </S.Intro>
  );
}
