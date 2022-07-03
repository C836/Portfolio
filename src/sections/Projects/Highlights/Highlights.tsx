import * as S from "./Highlights.styled";
import { Config } from "./Highlights.config";
import Highlight from "../../../components/Projects/Highlight/Highlight";
import { Text, Title } from "../../../components/Text/Text.styled";

export default function Highlights(props: Config) {
  const { HighlightRef1, HighlightRef2, HighlightRef3 } = props;

  return (
    <>
      <Title>Projects</Title>
      <Text>A seguir estão alguns de meus projetos favoritos até o momento.</Text>

      <S.Highlights>
        <Highlight HighlightRef={HighlightRef1} />
        <Highlight HighlightRef={HighlightRef2} right />
        <Highlight HighlightRef={HighlightRef3} />
      </S.Highlights>
    </>
  );
}
