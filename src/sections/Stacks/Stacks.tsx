import * as S from "./Stacks.styled";
import { Config } from "./Stacks.config";
import { Title } from "../../components/Text/Text.styled";
import { icons } from "../../data/tech";

export default function Stacks(props: Config) {
  return (
    <S.Stacks>
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
