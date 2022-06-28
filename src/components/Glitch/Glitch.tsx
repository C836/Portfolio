import * as S from "./Glitch.styled";
import { Config } from "./Glitch.config";

export default function Glitch(props: Config) {
  const { children, hidden } = props;
  return <S.Glitch hidden={hidden}>{children}</S.Glitch>;
}
