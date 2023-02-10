import React from 'react';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Component

import StreamSwiperItem from './StreamSwiperItem';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

export default function StreamSwiper(props) {
  const { cookRoom } = props;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      grabCursor
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {cookRoom.map(room => {
        return (
          <SwiperSlide key={room.cookingRoomId}>
            <StreamSwiperItem room={room} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
