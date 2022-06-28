import * as S from "./About.styled";
import { Config } from "./About.config";

import { icons } from "../../data/tech";

import Slider from "../../components/Slider/Slider";

export default function About(props: Config) {
  return (
    <S.About>
      <S.Slider>
        <Slider icons={icons.frontEnd} />
        <Slider icons={icons.backEndEtc} />
      </S.Slider>

      <S.TextField>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis
        ornare velit eu commodo. Phasellus urna lectus, efficitur nec quam ut,
        ultricies lobortis sapien. Vivamus ac dolor mollis, sollicitudin nulla
        eget, placerat nibh. Aliquam in enim ac arcu malesuada tincidunt.
        Vestibulum quis sem sit amet augue tempus tristique. Integer euismod ut
        turpis at commodo. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec quis diam sodales, molestie leo sed, dapibus lectus.
        Pellentesque in eros in augue malesuada iaculis. Nullam id feugiat
        dolor. Mauris elementum felis in tellus commodo scelerisque. Sed tellus
        felis, porta eget diam at, sollicitudin suscipit enim. Nunc viverra
        viverra ornare.
      </S.TextField>
    </S.About>
  );
}
