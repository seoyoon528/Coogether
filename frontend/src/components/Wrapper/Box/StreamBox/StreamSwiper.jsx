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
  // console.log(cookRoom);
  return (
    <Swiper
      modules={[Navigation]}
      // spaceBetween={20}
      // slidesPerView={3}
      navigation
      grabCursor
      breakpoints={{
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {cookRoom.map(room => {
        return (
          <SwiperSlide
            key={
              room.cookingRoomDto
                ? room.cookingRoomDto.cookingRoomId
                : room.cookingRoomId
            }
          >
            <StreamSwiperItem room={room} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
