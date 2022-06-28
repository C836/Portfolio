import * as S from "./Intro.styled";
import { Config } from "./Intro.config";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";

import { socials } from "../../data/socials";

export default function Intro(props: Config) {
  return (
    <S.Intro>
      <Button text="Currículo" />
      <Dropdown icons={socials} />
    </S.Intro>
  );
}
