import * as S from "./Highlight.styled";
import { Config } from "./Highlight.config";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import { highlights } from "../../../data/projects/highlights";

export default function Highlight(props: Config) {
  return (
    <S.Highlight>
      <S.Border>
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
          {highlights[0].tech.map((item: any, index: number) => (
            <S.Tech key={index}>{item}</S.Tech>
          ))}
        </S.TechList>

        <S.Links>
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
