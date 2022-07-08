import * as S from "./Highlights.styled";
import { Config } from "./Highlights.config";
import Highlight from "../../../components/Projects/Highlight/Highlight";
import { Text, Title } from "../../../components/Text/Text.styled";

export default function Highlights(props: Config) {
  const { HighlightRef1, HighlightRef2, HighlightRef3 } = props;

  return (
    <S.Highlights ref={HighlightRef1}>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.List>
        <Highlight />
        <Highlight HighlightRef={HighlightRef2} right />
        <Highlight HighlightRef={HighlightRef3} />
      </S.List>
    </S.Highlights>
  );
}
