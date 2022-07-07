import { useState } from "react";

import * as S from "./Slider.styled";
import { Config } from "./Slider.config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import useWindowDimensions from "../../utils/WindowDimensions";
import { IconContext } from "react-icons";

export default function Slider(props: Config) {
  const { icons } = props;

  const [actualIndex, setIndex] = useState(0);

  const { width } = useWindowDimensions()

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
      slidesPerView={
        width < 400
        ? 2
        : 3
      }
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
            <IconContext.Provider
            value={{size: width < 400
            ? "70px"
            : "60px"}}
            >
              <figure>{item.icon}</figure>
              <p>{item.name}</p>
            </IconContext.Provider>
          </S.Icon>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
