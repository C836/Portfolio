import { useState } from "react";

import * as S from "./Dropdown.styled";
import { Config } from "./Dropdown.config";

import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Dropdown(props: Config) {
  const { icons } = props;

  const [dropActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((dropActive) => !dropActive);
  };

  return (
    <S.Dropdown active={dropActive}>
      <S.Button active={dropActive} onClick={handleClick}>
        <FaPlus />
      </S.Button>

      <S.Menu>
        {icons.map((item, index) => (
          <S.Item
            active={dropActive}
            target="_blank"
            key={index}
            href={item.url}
          >
            <IconContext.Provider value={{ size: "30" }}>
              {item.icon}
            </IconContext.Provider>
          </S.Item>
        ))}
      </S.Menu>
    </S.Dropdown>
  );
}
