import { useState } from "react";

import * as S from "./Slider.styled";
import { Config } from "./Slider.config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";

export default function Slider(props: Config) {
  const { icons } = props;

  const [actualIndex, setIndex] = useState(0);

  const isCentered = (index: number, number_of_icons: number) => {
    if (
      actualIndex + 1 === index ||
      index === 0 && actualIndex === number_of_icons
    ) {
      return true;
    } else {
      false;
    }
  };

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
        <SwiperSlide key={index}>
          <S.Icon
            active={isCentered(index, icons.length - 1) ? true : false}
            color={item.color}
          >
            <figure>{item.icon}</figure>
            <p>{item.name}</p>
          </S.Icon>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
