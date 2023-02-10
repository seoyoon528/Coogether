import React, { useState } from 'react';
import { Stack } from '@mui/material';
import * as S from './StreamSwiperStyle';
import ChefHat from '../../../Rank/ChefHat';
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';

function StreamSwiperItem(props) {
  const { room } = props;
  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);

  let isDto = false;
  if (room.cookingRoomDto) {
    isDto = true;
  }

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
            src={
              isDto ? room.cookingRoomDto.cookingRoomImg : room.cookingRoomImg
            }
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
              {isDto ? (
                <p>
                  요리사{' '}
                  {room.cookingRoomDto.userJoinLists
                    ? room.cookingRoomDto.userJoinLists.length
                    : 0}
                  명
                </p>
              ) : (
                <p>
                  요리사 {room.userJoinLists ? room.userJoinLists.length : 0}명
                </p>
              )}
            </S.JoinUserWrapper>
            <S.StartTimeWrapper>
              {isDto ? (
                <p>
                  {`${new Date(
                    room.cookingRoomDto.cookingRoomStartTime
                  ).getHours()}:${new Date(
                    room.cookingRoomDto.cookingRoomStartTime
                  ).getMinutes()}`}
                  시작
                </p>
              ) : (
                <p>
                  {`${new Date(
                    room.cookingRoomStartTime
                  ).getHours()}:${new Date(
                    room.cookingRoomStartTime
                  ).getMinutes()}`}
                  시작
                </p>
              )}
            </S.StartTimeWrapper>
          </S.StartUserWrapper>
          <S.roomTitle
            onClick={() => {
              setIsCookRoomEnterModalOpened(true);
            }}
          >
            {isDto ? room.cookingRoomDto.cookingRoomName : room.cookingRoomName}
          </S.roomTitle>
          <S.KingWrapper>
            <p>
              {isDto
                ? room.cookingRoomDto.cookingRoomHost
                : room.cookingRoomHost}
            </p>
            <ChefHat color="red" className="chefhat" />
          </S.KingWrapper>
          <S.TagWrapper>
            #
            {isDto
              ? room.cookingRoomDto.recipe.recipeName
              : room.recipe.recipeName}
          </S.TagWrapper>
          <CookRoomEnterModal
            isCookRoomEnterModalOpened={isCookRoomEnterModalOpened}
            setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
            cookingRoomId={
              isDto ? room.cookingRoomDto.cookingRoomId : room.cookingRoomId
            }
            recipe={isDto ? room.cookingRoomDto.recipe : room.recipe}
          />
        </S.CookRoomItemWrapper>
      </Stack>
    </>
  );
}

export default StreamSwiperItem;
