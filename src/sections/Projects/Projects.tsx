import * as S from "./Projects.styled";
import Project from "../../components/Project/Project";
import { Text, Title } from "../../components/Text/Text.styled";
import { projects } from "../../assets/data/projects";
import { AddToRefConfig } from "../../App";

export default function Projects(props: AddToRefConfig) {
  const { addToRef } = props;

  return (
    <S.Projects>
      <Title>Meus projetos</Title>

      <S.List>
        {projects.map((project, index) => (
          <Project key={index} data={project} addToRef={addToRef} />
        ))}
      </S.List>
    </S.Projects>
  );
}
