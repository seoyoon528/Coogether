import React from 'react';
import { Link } from 'react-router-dom';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './streamItemStyle';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

export default function StreamSwiper(props) {
  const { cookRoom } = props;

  //   const StartTime = new Date(cookingRoomStartTime);
  //   const hour = StartTime.getHours();
  //   const minute = StartTime.getMinutes();
  //   const START = `${hour}: ${minute}`;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={48}
      slidesPerView={3}
      navigation
      grabCursor
      //   onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {cookRoom.map(room => {
        return (
          <SwiperSlide key={room.cookingRoomId}>
            <S.CookRoomItemWrapper>
              <S.CookRoomItemImg src={room.cookingRoomImg} alt="img" />
              <S.StartUserWrapper>
                <S.JoinUserWrapper>
                  <p>{room.userJoinLists ? room.userJoinLists.length : 0}명</p>
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
              </S.KingWrapper>
              <S.TagWrapper>
                <span>#{room.recipe.recipeName}</span>
              </S.TagWrapper>
            </S.CookRoomItemWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
