import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Room() {
  const params = useParams();
  const location = useLocation();
  const { roomName } = location.state.roomName;
  const { king } = location.state.king;
  const { thumbnail } = location.state.thumbnail;
  const { anounce } = location.state.anounce;
  const { recipe } = location.state.recipe;
  const { startTime } = location.state.startTime;

  return (
    <div>
      <p>{params.roomId} 번 요리방 입니다</p>
      <img src={thumbnail} alt="" />
      <p>{startTime} 시작</p>
      <p>제목 : {roomName}</p>
      <p>요리대장 : {king}</p>
      <p>레시피 : {recipe}</p>
      {anounce && <p>공지사항 : {anounce}</p>}

      {/* 요리 대기방, 요리 진행방 컴포넌트를 넣고 time 아웃으로 자동으로 넘어가게하기 */}
    </div>
  );
}

export default Room;
