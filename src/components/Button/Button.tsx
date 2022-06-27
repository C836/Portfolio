import * as S from "./Button.styled";
import { Config } from "./Button.config";

export default function Button(props: Config) {
  const { text } = props;

  return <S.Button>{text}</S.Button>;
}
