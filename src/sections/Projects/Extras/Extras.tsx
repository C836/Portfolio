import * as S from "./Extras.styled";
import { Config } from "./Extras.config";
import Project from "../../../components/Projects/Project";

export default function Extras(props: Config) {
  return (
    <S.Extras>
      <Project />
      <Project />
      <Project />
    </S.Extras>
  );
}
