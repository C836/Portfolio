import * as S from "./Project.styled";
import { Config } from "./Project.config";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import useWindowDimensions from "../../utils/WindowDimensions";

import { Small, Subtitle, Text } from "../Text/Text.styled";
import Button from "../Button/Button";
import { Button_Wrapper } from "../Wrapper/Wrapper.styled";

export default function Project(props: Config) {
  const { data, addToRef, right } = props;
  const { nome, descricao, extra, tech, techs, cover, gif, links } = data;

  const { width } = useWindowDimensions()

  return (
    <S.Project ref={addToRef} right={right}>
      <S.Border>
        <S.Icon color={tech.color}>
          {tech.icon}
        </S.Icon>

        <a target={"_blank"} href={links.web}>
          <S.Img_Wrapper>
            <img src={cover} />
          </S.Img_Wrapper>
        </a>
      </S.Border>

      <S.TextField>
        <Subtitle>{nome}</Subtitle>
        <Text>{width > 1100 ? descricao + extra : descricao}</Text>

        <S.TechList>
          {techs.map((item: any, index: number) => (
            <S.Tech right={right} key={index}>
              <Small>{item}</Small>
            </S.Tech>
          ))}
        </S.TechList>

        <S.Links right={right}>
          <Button_Wrapper>
            <Button alt transparent text="Github" />
            <Button alt transparent text="Live app" />
          </Button_Wrapper>
        </S.Links>
      </S.TextField>
    </S.Project>
  );
}
