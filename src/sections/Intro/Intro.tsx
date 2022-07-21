import { useState } from "react";

import * as S from "./Intro.styled";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import Glitch from "../../components/Glitch/Glitch";

import Typewriter from "typewriter-effect";

import { socials } from "../../assets/data/socials";
import useWindowDimensions from "../../utils/WindowDimensions";
import { Subtitle, Text } from "../../components/Text/Text.styled";
import {
  Button_Wrapper,
  Text_Wrapper,
} from "../../components/Wrapper/Wrapper.styled";
import { AddToRefConfig } from "../../App";

import background_imgPath from "./../../assets/img/background.jpeg";
import { openInNewTab } from "../../utils/NewTab";

export default function Intro(props: {
  addToRef: any;
  goTo: (index: number) => void;
}) {

  const { addToRef, goTo } = props;

  const [nameActive, setActive] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <S.Intro ref={addToRef}>
      <S.Background background={background_imgPath} />
      {width > 850 && (
        <S.Curriculo
          onClick={() =>
            openInNewTab(
              "https://drive.google.com/file/d/1pmTKoYL5tCcLVUYlR--4a5G4vgwj70Vq/view?usp=sharing"
            )
          }
        >
          <Button text="Currículo" />
        </S.Curriculo>
      )}

      <S.TextField>
        <Subtitle>
          Olá <S.Hand>👋</S.Hand>, meu nome é
        </Subtitle>
        <S.NameWrapper
          onMouseEnter={(e) => setActive(true)}
          onMouseLeave={(e) => setActive(false)}
        >
          {width > 850 ? (
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
          ) : (
            <h1>{"<Gabriel Lopes />"}</h1>
          )}
        </S.NameWrapper>

        <Text_Wrapper>
          <Text>
            Sou um desenvolvedor web e designer gráfico. Abaixo você encontra um
            pouco mais sobre mim e alguns de meus projetos favoritos.
          </Text>
        </Text_Wrapper>

        <Button_Wrapper>
          <Button colored text="Contato" onClick={() => goTo(7)} />
          <Button text="Projetos" onClick={() => goTo(3)} />
        </Button_Wrapper>
      </S.TextField>

      <Dropdown icons={socials} />
    </S.Intro>
  );
}
