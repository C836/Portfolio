import { useState } from "react";

import * as S from "./Intro.styled";
import { Config } from "./Intro.config";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import Glitch from "../../components/Glitch/Glitch";

import Typewriter from "typewriter-effect";

import { socials } from "../../data/socials";
import useWindowDimensions from "../../utils/WindowDimensions";

export default function Intro(props: Config) {
  const { IntroRef } = props;

  const [nameActive, setActive] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <S.Intro ref={IntroRef}>
      <S.Background />
      {
        width > 850 && 
        <S.Curriculo>
          <Button text="Currículo" />
        </S.Curriculo>
      }

      <S.TextField>
        <h2>
          Olá <S.Hand>👋</S.Hand>, meu nome é
        </h2>
        <S.NameWrapper
          onMouseEnter={(e) => setActive(true)}
          onMouseLeave={(e) => setActive(false)}
        >
          {
            width > 850 ?
            <>
              <S.Name hidden={nameActive ? true : false}>
                <Typewriter
                  options={{
                    delay: 70,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString("<" + "Gabriel Lopes")
                      .typeString(" />")
                      .start();
                  }}
                />
              </S.Name>

              <Glitch hidden={nameActive ? false : true}>
                {"<Gabriel Lopes />"}
              </Glitch>
            </>
            :
            <h1>{"<Gabriel Lopes />"}</h1>
          }
        </S.NameWrapper>

        <h2>Sejam bem vindes ao meu portfólio 😎</h2>

        <p>
          Sou um desenvolvedor web e designer gráfico. Abaixo você encontra um
          pouco mais sobre mim e alguns de meus projetos favoritos.
        </p>
        <p>Obrigado por estar aqui! 😄</p>

        <Button text="Contato" />
      </S.TextField>

      <Dropdown icons={socials} />
    </S.Intro>
  );
}
