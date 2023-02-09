import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Stack } from '@mui/material';

import * as S from './StreamSwiperStyle';

// Component
import ChefHat from '../../../Rank/ChefHat';
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

export default function StreamSwiper(props) {
  const { cookRoom } = props;
  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);

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
                <S.CookRoomItemImg
                  src={room.cookingRoomImg}
                  alt="img"
                  onClick={() => {
                    setIsCookRoomEnterModalOpened(true);
                  }}
                />
                <S.StartUserWrapper
                  onClick={() => {
                    setIsCookRoomEnterModalOpened(true);
                  }}
                >
                  <S.JoinUserWrapper>
                    <p>
                      요리사{' '}
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
                <S.roomTitle
                  onClick={() => {
                    setIsCookRoomEnterModalOpened(true);
                  }}
                >
                  {room.cookingRoomName}
                </S.roomTitle>
                <S.KingWrapper>
                  <p>{room.cookingRoomHost}</p>
                  <ChefHat color="red" className="chefhat" />
                </S.KingWrapper>
                <S.TagWrapper>#{room.recipe.recipeName}</S.TagWrapper>
                <CookRoomEnterModal
                  isCookRoomEnterModalOpened={isCookRoomEnterModalOpened}
                  setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
                  cookingRoomId={room.cookingRoomId}
                  recipe={room.recipe}
                />
              </S.CookRoomItemWrapper>
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
