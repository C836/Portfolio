import { useState } from "react";
import { IconType } from "react-icons/lib";
import { Config } from "./Dropdown.config";

import * as S from "./Dropdown.styled";

export default function Dropdown(props: Config) {
  const { icons } = props;

  const [dropActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((dropActive) => !dropActive);
  };

  return (
    <S.Dropdown active={dropActive}>
      <S.Button active={dropActive} onClick={handleClick}>
        +
      </S.Button>

      <S.Menu>
        {icons.map((item:any, index:number) => (
          <S.Item active={dropActive} key={index} href="#">
            {item}
          </S.Item>
        ))}
      </S.Menu>
    </S.Dropdown>
  );
}
