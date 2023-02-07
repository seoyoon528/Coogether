import React from 'react';
import { Link } from 'react-router-dom';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Stack } from '@mui/material';

import * as S from './StreamSwiperStyle';

// Component
import ChefHat from '../../../Rank/ChefHat';

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
      //   onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {cookRoom.map(room => {
        return (
          <SwiperSlide key={room.cookingRoomId}>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <S.CookRoomItemWrapper>
                <S.CookRoomItemImg src={room.cookingRoomImg} alt="img" />
                <S.StartUserWrapper>
                  <S.JoinUserWrapper>
                    <p>
                      {room.userJoinLists ? room.userJoinLists.length : 0}명
                    </p>
                  </S.JoinUserWrapper>
                  <S.StartTimeWrapper>
                    <p>
                      {`${new Date(
                        room.cookingRoomStartTime
                      ).getHours()}:${new Date(
                        room.cookingRoomStartTime
                      ).getMinutes()}`}
                      시작
                    </p>
                  </S.StartTimeWrapper>
                </S.StartUserWrapper>
                <Link to={`/Room/${room.cookingRoomId}`}>
                  <S.roomTitle>{room.cookingRoomName}</S.roomTitle>
                </Link>
                <S.KingWrapper>
                  <p>{room.cookingRoomHost}</p>
                  <ChefHat color="red" />
                </S.KingWrapper>
                <S.TagWrapper>
                  <span>#{room.recipe.recipeName}</span>
                </S.TagWrapper>
              </S.CookRoomItemWrapper>
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
