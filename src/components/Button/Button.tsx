import * as S from "./Button.styled";
import { Config } from "./Button.config";

export default function Button(props: Config) {
  const { text, colored } = props;

  return <S.Button colored={colored}>{text}</S.Button>;
}
