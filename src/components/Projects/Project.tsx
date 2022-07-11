import * as S from "./Project.styled";
import { Config } from "./Project.config";

import { Subtitle, Text } from "../Text/Text.styled";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Project(props: Config) {
  const { techs, nome, descricao, links, icon } = props;

  return (
    <S.Project>
      <S.Icon src={icon} />
      <Subtitle>{nome}</Subtitle>
      <Text>{descricao}</Text>
      <S.Links>
        <IconContext.Provider value={{size: "25px"}}>
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
        </IconContext.Provider>
      </S.Links>
      <S.Techs>
        {techs.map((item, index) => (
          <S.Tech>{item}</S.Tech>
        ))}
      </S.Techs>
    </S.Project>
  );
}
