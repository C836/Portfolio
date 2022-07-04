import * as S from "./Pagination.styled";
import { Config } from "./Pagination.config";

export default function Pagination(props: Config) {
  return (
    <S.Pagination>
      <S.Dots />
      <S.Dots />
      <S.Dots />
      <S.Dots />
      <S.Dots />
    </S.Pagination>
  );
}
