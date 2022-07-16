import * as S from "./Button.styled";
import { Config } from "./Button.config";

export default function Button(props: Config) {
  const { text, colored, transparent, alt, onClick } = props;

  return (
    <S.Button alt={alt} onClick={onClick} colored={colored} transparent={transparent}>
      {text}
    </S.Button>
  );
}
