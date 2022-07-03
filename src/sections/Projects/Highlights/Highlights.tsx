import * as S from "./Highlights.styled";
import { Config } from "./Highlights.config";
import Highlight from "../../../components/Projects/Highlight/Highlight";

export default function Highlights(props: Config) {
  const { HighlightRef1, HighlightRef2, HighlightRef3 } = props;;

  return (
    <section>
      <h1>Projects</h1>
      <p>A seguir estão alguns de meus projetos favoritos até o momento.</p>

      <Highlight HighlightRef={HighlightRef1} />
      <Highlight HighlightRef={HighlightRef2} right />
      <Highlight HighlightRef={HighlightRef3} />
    </section>
  );
}
