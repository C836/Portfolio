import * as S from "./Extras.styled";
import { Config } from "./Extras.config";

import Project from "../../../components/Projects/Project";

import { projects } from "../../../data/projects/projects";

export default function Extras(props: Config) {
  const ExtraRefs = Object.values(props);

  return (
    <S.Extras>
      {projects.map((item, index) => (
        <S.Wrapper
        ref={ExtraRefs[index]}
        >
          <Project
            techs={item[index].techs}
            nome={item[index].nome}
            descricao={item[index].descricao}
            links={item[index].links}
          />
          <Project
            techs={item[index].techs}
            nome={item[index].nome}
            descricao={item[index].descricao}
            links={item[index].links}
          />
          <Project
            techs={item[index].techs}
            nome={item[index].nome}
            descricao={item[index].descricao}
            links={item[index].links}
          />
        </S.Wrapper>
      ))}
    </S.Extras>
  );
}
