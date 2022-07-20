import * as S from "./Projects.styled";
import Project from "../../components/Project/Project";
import { Text, Title } from "../../components/Text/Text.styled";
import { projects } from "../../assets/data/projects";
import { AddToRefConfig } from "../../App";

export default function Projects(props: AddToRefConfig) {
  const { addToRef } = props;

  return (
    <S.Projects>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.List>
        <Project data={projects[0]} addToRef={addToRef} />
        <Project data={projects[1]} addToRef={addToRef} />
        <Project data={projects[2]} addToRef={addToRef} />
        <Project data={projects[3]} addToRef={addToRef} />
      </S.List>
    </S.Projects>
  );
}
