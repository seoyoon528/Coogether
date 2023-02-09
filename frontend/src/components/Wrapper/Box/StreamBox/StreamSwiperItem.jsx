import React, { useState } from 'react';
import { Stack } from '@mui/material';
import * as S from './StreamSwiperStyle';
import ChefHat from '../../../Rank/ChefHat';
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';

function StreamSwiperItem(props) {
  const { room } = props;
  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);

  return (
    <>
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
                요리사 {room.userJoinLists ? room.userJoinLists.length : 0}명
              </p>
            </S.JoinUserWrapper>
            <S.StartTimeWrapper>
              <p>
                {`${new Date(room.cookingRoomStartTime).getHours()}:${new Date(
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
    </>
  );
}

export default StreamSwiperItem;
