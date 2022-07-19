import * as S from "./Highlights.styled";
import { Config } from "./Highlights.config";
import Highlight from "../../../components/Projects/Highlight/Highlight";
import { Text, Title } from "../../../components/Text/Text.styled";
import { highlights } from "../../../data/projects/highlights";

export default function Highlights(props: Config) {
  const { HighlightRef1, HighlightRef2, HighlightRef3, HighlightRef4 } = props;

  return (
    <S.Highlights ref={HighlightRef1}>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.List>
        <Highlight data={highlights[0]} />
        <Highlight data={highlights[1]} HighlightRef={HighlightRef2} />
        <Highlight data={highlights[2]} HighlightRef={HighlightRef3} />
        <Highlight data={highlights[3]} HighlightRef={HighlightRef4} />
      </S.List>
    </S.Highlights>
  );
}
