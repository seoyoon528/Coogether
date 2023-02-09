import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './streamItemStyle';

// Component
import ChefHat from '../../../Rank/ChefHat';
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';

function StreamItem({ room }) {
  // CookRoomEnterModal
  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);

  const {
    cookingRoomId,
    cookingRoomImg,
    cookingRoomName,
    cookingRoomStartTime,
    cookingRoomHost,
    userJoinLists,
    recipe,
  } = room;
  const StartTime = new Date(cookingRoomStartTime);
  const hour = StartTime.getHours();
  const minute = StartTime.getMinutes();
  const START = `${hour}: ${minute}`;
  return (
    <S.CookRoomItemWrapper>
      <S.CookRoomItemImg
        src={cookingRoomImg}
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
          <p>요리사 {userJoinLists ? userJoinLists.length : 0}명</p>
        </S.JoinUserWrapper>
        <S.StartTimeWrapper>
          <p>{START} 시작</p>
        </S.StartTimeWrapper>
      </S.StartUserWrapper>
      <S.roomTitle
        onClick={() => {
          setIsCookRoomEnterModalOpened(true);
        }}
      >
        {cookingRoomName}
      </S.roomTitle>
      <S.KingWrapper>
        <p>{cookingRoomHost}</p>
        <ChefHat color="red" className="chefhat" />
      </S.KingWrapper>
      <S.TagWrapper>
        <span>#{recipe.recipeName}</span>
      </S.TagWrapper>
      <CookRoomEnterModal
        isCookRoomEnterModalOpened={isCookRoomEnterModalOpened}
        setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
        cookingRoomId={cookingRoomId}
        recipe={recipe}
      />
    </S.CookRoomItemWrapper>
  );
}

export default StreamItem;
