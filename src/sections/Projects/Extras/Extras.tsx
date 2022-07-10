import * as S from "./Extras.styled";
import { Config } from "./Extras.config";

import Project from "../../../components/Projects/Project";

import { projects } from "../../../data/projects/projects";

export default function Extras(props: Config) {
  const ExtraRefs = Object.values(props);

  return (
    <S.Extras>
      {projects.map((list, index) => (
        <S.Wrapper ref={ExtraRefs[index]}>
          {list.map((project) => (
            <Project
              techs={project.techs}
              nome={project.nome}
              descricao={project.descricao}
              icon={project.icon}
              links={project.links}
            />
          ))}
        </S.Wrapper>
      ))}
    </S.Extras>
  );
}
