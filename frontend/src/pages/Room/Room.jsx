import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Room() {
  let changeTimer;
  let remainingTime;
  const [isStart, setIsStart] = useState(false);
  const params = useParams();
  const location = useLocation();

  const { roomName } = location.state.roomName;
  const { king } = location.state.king;
  const { thumbnail } = location.state.thumbnail;
  const { anounce } = location.state.anounce;
  const { recipe } = location.state.recipe;
  const { startTime } = location.state.startTime;
  const { targetTime } = location.state.targetTime;

  const hour = startTime.getHours();
  const minute = startTime.getMinutes();
  const START = `${hour}시: ${minute}분`;

  // console.log(targetTime);

  const calculateTime = () => {
    const currentTime = new Date().getTime();
    const remainingDuration = targetTime - currentTime;
    return remainingDuration;
  };

  const changeCheck = useCallback(() => {
    remainingTime = calculateTime(targetTime);

    changeTimer = setTimeout(changeCheck, remainingTime);

    // ms 로 5분(300000) 아래면 값을 변경하게 변경
    if (remainingTime < 0) {
      setIsStart(true);
      clearTimeout(changeTimer);
    }
  }, []);

  useEffect(() => {
    changeTimer = setTimeout(changeCheck, remainingTime);
  }, []);
  console.log(isStart);

  // 방송대기방 컴포넌트라고 가정
  const test = (
    <div>
      <p>제목 : {roomName}</p>
      <p>{params.roomId} 번 요리방 입니다</p>
      <img src={thumbnail} alt="" />
      <p>{START} 시작</p>
      <p>요리대장 : {king}</p>
      <p>레시피 : {recipe}</p>
      {anounce && <p>공지사항 : {anounce}</p>}
    </div>
  );

  // 실제 방송방이라고 가정할 것
  const test2 = (
    <div>
      <p>지금 방송중</p>
    </div>
  );
  return (
    <div>
      {!isStart && test}
      {isStart && test2}
    </div>
  );
}
//  {/* 요리 대기방, 요리 진행방 컴포넌트를 넣고 time 아웃으로 자동으로 넘어가게하기 */}

export default Room;
