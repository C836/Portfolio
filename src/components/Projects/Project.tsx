import * as S from "./Project.styled";
import { Config } from "./Project.config";

import { Text } from "../Text/Text.styled";

import { projects } from "../../data/projects/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project(props: Config) {
  return (
    <S.Project>
      <S.Tech>{projects[0].tech}</S.Tech>
      <S.Cover src={projects[0].cover} />
      <h3>{projects[0].nome}</h3>
      <Text>{projects[0].descricao.slice(0, 100) + "..."}</Text>
      <S.Links>
        <li>
          <a target={"_blank"} href={projects[0].links.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a target={"_blank"} href={projects[0].links.web}>
            <FaExternalLinkAlt />
          </a>
        </li>
      </S.Links>
    </S.Project>
  );
}
