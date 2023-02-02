import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './streamItemStyle';

function StreamItem({ room }) {
  const {
    cookingRoomId,
    cookingRoomImg,
    cookingRoomName,
    cookingRoomNotice,
    cookingRoomStartTime,
    cookingRoomStatus,
    recipeCategory,
    recipeContent,
    recipeCreatedDate,
    recipeHost,
    recipeName,
    recipeType,
    userJoinLists,
  } = room;
  console.log(cookingRoomStartTime);
  console.log(new Date());
  // const hour = cookingRoomStartTime.getHours();
  // const minute = cookingRoomStartTime.getMinutes();
  // const START = `${hour}: ${minute}`;
  return (
    <S.CookRoomItemWrapper>
      {/* <Link to={`/Room/${id}`}>{roomName}</Link> */}
      {/* to 프롭을 객체로 묶어서 보낼 수 있음 이때 주소를 입력하려면 pathname 으로 사용 */}
      <S.CookRoomItemImg src={cookingRoomImg} alt="이미지 오류" />
      <S.StartUserWrapper>
        <S.JoinUserWrapper>
          <p>{userJoinLists ? userJoinLists.length : 0}명</p>
        </S.JoinUserWrapper>
        <S.StartTimeWrapper>{/* <p>{START} 시작</p> */}</S.StartTimeWrapper>
      </S.StartUserWrapper>
      <Link
        to={{
          pathname: `/Room/${cookingRoomId}`,
          state: {
            roomName: { cookingRoomName },
            recipe: { recipeName },
            targetTime: { cookingRoomStartTime },
            thumbnail: { cookingRoomImg },
            anounce: { cookingRoomNotice },
            // 요리방 호스트 만들어주시면 넣기
            // king: { king },
            userJoinLists: { userJoinLists },
          },
        }}
      >
        <S.roomTitle>{cookingRoomName}</S.roomTitle>
      </Link>
      <S.KingWrapper>
        {/* 요리방 호스트 만들어주시면 넣기 */}

        {/* <p>{king}</p> */}
      </S.KingWrapper>
      <S.TagWrapper>
        <span>#{recipeName}</span>
      </S.TagWrapper>
    </S.CookRoomItemWrapper>
  );
}

export default StreamItem;
