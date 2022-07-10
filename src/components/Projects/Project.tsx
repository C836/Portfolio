import * as S from "./Project.styled";
import { Config } from "./Project.config";

import { Text } from "../Text/Text.styled";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project(props: Config) {
  const { techs, nome, descricao, links, icon } = props;

  return (
    <S.Project>
      <S.Icon src={icon}/>
      <S.Techs>
        {techs.map((item, index) => (
          <S.Tech>{item}</S.Tech>
        ))}
      </S.Techs>
      <h3>{nome}</h3>
      <Text>{descricao}</Text>
      <S.Links>
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
    </S.Project>
  );
}
