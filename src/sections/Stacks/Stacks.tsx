import * as S from "./Stacks.styled";
import { Title } from "../../components/Text/Text.styled";
import { icons } from "../../data/tech";
import { AddToRefConfig } from "../../App";

export default function Stacks(props: AddToRefConfig) {
  const { addToRef } = props

  return (
    <S.Stacks ref={addToRef}>
      <Title>Tech Stack</Title>
      <S.Icons_Wrapper>
        {icons.frontEnd.map((item, index) => (
          <S.Icon>
            <p>{item.name}</p>
            <figure>{item.icon}</figure>
          </S.Icon>
        ))}

        {icons.backEndEtc.map((item, index) => (
          <S.Icon>
            <p>{item.name}</p>
            <figure>{item.icon}</figure>
          </S.Icon>
        ))}
      </S.Icons_Wrapper>
    </S.Stacks>
  );
}
