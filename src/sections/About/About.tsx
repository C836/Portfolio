import * as S from "./About.styled";
import { Config } from "./About.config";

import { icons } from "../../data/tech";

import { Title, Text, Subtitle } from "../../components/Text/Text.styled";

export default function About(props: Config) {
  const { AboutRef } = props;

  return (
    <S.About ref={AboutRef}>
      <S.TextField>
        <Title>About.me</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          lobortis ornare velit eu commodo. Phasellus urna lectus, efficitur nec
          quam ut, ultricies lobortis sapien. Vivamus ac dolor mollis,
          sollicitudin nulla eget, placerat nibh. Aliquam in enim ac arcu
          malesuada tincidunt. Vestibulum quis sem sit amet augue tempus
          tristique. Integer euismod ut turpis at commodo. <p/>Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec quis diam sodales, molestie
          leo sed, dapibus lectus. Pellentesque in eros in augue malesuada
          iaculis. Nullam id feugiat dolor. Mauris elementum felis in tellus
          commodo scelerisque. Sed tellus felis, porta eget diam at,
          sollicitudin suscipit enim. Nunc viverra viverra ornare.
        </Text>
      </S.TextField>
    </S.About>
  );
}
