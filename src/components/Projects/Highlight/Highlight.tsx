import * as S from "./Highlight.styled";
import { Config } from "./Highlight.config";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Small, Subtitle, Text } from "../../Text/Text.styled";

export default function Highlight(props: Config) {
  const { data, HighlightRef, right } = props;
  const { nome, descricao, tech, techs, cover, gif, links } = data;

  return (
    <S.Highlight ref={HighlightRef} right={right}>
      <S.Border>
        <S.IconWrapper right={right} color={tech.color}>
          <S.Icon right={right}>{tech.icon}</S.Icon>
        </S.IconWrapper>
        <a target={"_blank"} href={links.web}>
          <S.Img_Wrapper>
            <img src={cover} />
          </S.Img_Wrapper>
        </a>
      </S.Border>

      <S.TextField>
        <Subtitle>{nome}</Subtitle>
        <Text>{descricao}</Text>

        <S.TechList>
          {techs.map((item: any, index: number) => (
            <S.Tech right={right} key={index}>
              <Small>{item}</Small>
            </S.Tech>
          ))}
        </S.TechList>

        <S.Links right={right}>
          <li>
            <a target={"_blank"} href={links.github}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a target={"_blank"} href={links.web}>
              <FaExternalLinkAlt />
            </a>
          </li>
        </S.Links>
      </S.TextField>
    </S.Highlight>
  );
}
