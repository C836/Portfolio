import * as S from "./Highlight.styled";
import { Config } from "./Highlight.config";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { highlights } from "../../../data/projects/highlights";

export default function Highlight(props: Config) {
  const { HighlightRef, right } = props;

  return (
    <S.Highlight ref={HighlightRef} right={right}>
      <S.Border>
        <S.IconWrapper right={right} color={highlights[0].tech.color}>
          <S.Icon right={right}>{highlights[0].tech.icon}</S.Icon>
        </S.IconWrapper>
        <a target={"_blank"} href={highlights[0].links.web}>
          <S.Img_Wrapper>
            <img src={highlights[0].cover} />
          </S.Img_Wrapper>
        </a>
      </S.Border>

      <S.TextField>
        <h3>{highlights[0].nome}</h3>
        <p>{highlights[0].descricao}</p>

        <S.TechList>
          {highlights[0].techs.map((item: any, index: number) => (
            <S.Tech right={right} key={index}>
              {item}
            </S.Tech>
          ))}
        </S.TechList>

        <S.Links right={right}>
          <li>
            <a target={"_blank"} href={highlights[0].links.github}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a target={"_blank"} href={highlights[0].links.web}>
              <FaExternalLinkAlt />
            </a>
          </li>
        </S.Links>
      </S.TextField>
    </S.Highlight>
  );
}
