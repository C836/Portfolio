import * as S from "./Pagination.styled";
import { Config } from "./Pagination.config";

export default function Pagination(props: Config) {
  const { pageIndex, sections_Count } = props;

  return (
    <S.Pagination>
      {[...Array(sections_Count)].map((item, index) => (
        <S.Dots key={index} selected={pageIndex === index && true} />
      ))}
    </S.Pagination>
  );
}
