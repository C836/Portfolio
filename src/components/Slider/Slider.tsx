import { useState } from "react";

import * as S from "./Slider.styled";
import { Config } from "./Slider.config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";

export default function Slider(props: Config) {
  const { icons } = props;

  const [actualIndex, setIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      onSlideChange={(swiper) => {
        setIndex(swiper.realIndex);
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {icons.map((item: any, index: number) => (
        <SwiperSlide>
          <S.Icon>
            {item.icon}
          </S.Icon>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
