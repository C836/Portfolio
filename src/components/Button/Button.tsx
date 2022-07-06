import * as S from "./Button.styled";
import { Config } from "./Button.config";

export default function Button(props: Config) {
  const { text, colored, transparent } = props;

  return <S.Button colored={colored} transparent={transparent}>{text}</S.Button>;
}
