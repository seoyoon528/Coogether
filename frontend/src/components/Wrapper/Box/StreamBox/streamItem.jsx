import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './streamItemStyle';

function StreamItem({ room }) {
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
      <h1>{cookingRoomId}</h1>
      <S.CookRoomItemImg src={cookingRoomImg} alt="img" />
      <S.StartUserWrapper>
        <S.JoinUserWrapper>
          <p>{userJoinLists ? userJoinLists.length : 0}명</p>
        </S.JoinUserWrapper>
        <S.StartTimeWrapper>
          <p>{START} 시작</p>
        </S.StartTimeWrapper>
      </S.StartUserWrapper>
      <Link
        to={{
          pathname: `/Room/${cookingRoomId}`,
          state: { targetTime: cookingRoomStartTime },
        }}
      >
        <S.roomTitle>{cookingRoomName}</S.roomTitle>
      </Link>
      <S.KingWrapper>
        <p>{cookingRoomHost}</p>
      </S.KingWrapper>
      <S.TagWrapper>
        <span>#{recipe.recipeName}</span>
      </S.TagWrapper>
    </S.CookRoomItemWrapper>
  );
}

export default StreamItem;
