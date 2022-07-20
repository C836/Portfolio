import * as S from "./About.styled";

import { Title, Text } from "../../components/Text/Text.styled";
import { AddToRefConfig } from "../../App";

export default function About(props: AddToRefConfig) {
  const { addToRef } = props;

  return (
    <S.About ref={addToRef}>
      <S.TextField>
        <Title>Sobre mim</Title>
        <Text>
          Meu nome é Gabriel e sou um estudante de programação e desenvolvimento
          Web. Comecei a minha jornada através do Javascript, desenvolvendo
          páginas em HTML e protótipos interativos, sempre com foco na
          experiẽncia do usuário. Desenvolvi diversas aplicações tanto em
          front-end, quanto em back-end utilizando frameworks da atualidade como
          Node, React, Vue, Angular, Nest, Typescript, entre outros. Documento
          todos os meus projetos através do meu perfil no github. Abaixo você
          encontra ferramentas que utilizo e alguns de meus trabalhos.
        </Text>
      </S.TextField>
    </S.About>
  );
}
