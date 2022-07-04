import * as S from "./Pagination.styled";
import { Config } from "./Pagination.config";

export default function Pagination(props: Config) {
  const { pageIndex, sections } = props;

  return (
    <S.Pagination>
      {sections.map((item, index) => (
        <S.Dots key={index} selected={pageIndex === index && true} />
      ))}
    </S.Pagination>
  );
}
