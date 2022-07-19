import * as S from "./Projects.styled";
import { Config } from "./Projects.config";
import Project from "../../components/Project/Project";
import { Text, Title } from "../../components/Text/Text.styled";
import { projects } from "../../data/projects";

export default function Projects(props: Config) {
  const { ProjectRef } = props;

  return (
    <S.Projects>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.List>
        <Project data={projects[0]} ProjectRef={ProjectRef} />
        <Project data={projects[1]} ProjectRef={ProjectRef} />
        <Project data={projects[2]} ProjectRef={ProjectRef} />
        <Project data={projects[3]} ProjectRef={ProjectRef} />
      </S.List>
    </S.Projects>
  );
}
