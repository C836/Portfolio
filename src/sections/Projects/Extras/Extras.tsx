import * as S from "./Extras.styled";
import { Config } from "./Extras.config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";

export default function Extras(props: Config) {
  const { ExtraRef } = props;

  return (
    <S.Extras ref={ExtraRef}>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </S.Extras>
  );
}
