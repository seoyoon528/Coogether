import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './streamItemStyle';

function StreamItem({ room }) {
  const {
    roomId,
    roomName,
    recipe,
    startTime,
    thumbnail,
    anounce,
    king,
    targetTime,
    users,
  } = room;

  const hour = startTime.getHours();
  const minute = startTime.getMinutes();
  const START = `${hour}: ${minute}`;

  return (
    <S.CookRoomItemWrapper>
      {/* <Link to={`/Room/${id}`}>{roomName}</Link> */}
      {/* to 프롭을 객체로 묶어서 보낼 수 있음 이때 주소를 입력하려면 pathname 으로 사용 */}
      <S.CookRoomItemImg src={thumbnail} alt="이미지 오류" />
      <S.StartUserWrapper>
        <S.JoinUserWrapper>
          <p>{users}명</p>
        </S.JoinUserWrapper>
        <S.StartTimeWrapper>
          <p>{START} 시작</p>
        </S.StartTimeWrapper>
      </S.StartUserWrapper>
      <Link
        to={{
          pathname: `/Room/${roomId}`,
          state: {
            roomName: { roomName },
            recipe: { recipe },
            startTime: { startTime },
            targetTime: { targetTime },
            thumbnail: { thumbnail },
            anounce: { anounce },
            king: { king },
          },
        }}
      >
        <S.roomTitle>{roomName}</S.roomTitle>
      </Link>
      <S.KingWrapper>
        <p>{king}</p>
      </S.KingWrapper>
      <S.TagWrapper>
        <span>#{recipe}</span>
      </S.TagWrapper>
    </S.CookRoomItemWrapper>
  );
}

export default StreamItem;
