import * as S from "./Projects.styled";
import { Config } from "./Projects.config";
import Project from "../../components/Project/Project";
import { Text, Title } from "../../components/Text/Text.styled";
import { projects } from "../../data/projects";

export default function Projects(props: Config) {
  const { ProjectRef1, ProjectRef2, ProjectRef3, ProjectRef4 } = props;

  return (
    <S.Projects ref={ProjectRef1}>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.List>
        <Project data={projects[0]} />
        <Project data={projects[1]} ProjectRef={ProjectRef2} />
        <Project data={projects[2]} ProjectRef={ProjectRef3} />
        <Project data={projects[3]} ProjectRef={ProjectRef4} />
      </S.List>
    </S.Projects>
  );
}
