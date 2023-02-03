import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import CookRoom from '../../components/Room/CookRoom';
import WaitRoom from '../../components/Room/WaitRoom';

function Room() {
  const params = useParams();
  const location = useLocation();

  // 시작시간 체크
  const [isStart, setIsStart] = useState(false);
  // 남은 시간을 체크해주는 타이머
  let changeTimer;
  // 남은 시간
  let remainingTime;

  const { roomId } = params;

  // console.log(roomId);

  const cookingRoomStartTime = location.state.targetTime;
  const targetTime = new Date(cookingRoomStartTime).getTime();
  // console.log(targetTime);
  // 시간 계산
  const calculateTime = useCallback(() => {
    const currentTime = new Date().getTime();
    const remainingDuration = targetTime - currentTime;
    return remainingDuration;
  }, []);

  const changeCheck = useCallback(() => {
    remainingTime = calculateTime(targetTime);

    changeTimer = setTimeout(changeCheck, remainingTime);
    console.log(remainingTime);
    // 밀리초 로 5분(300000) 아래면 값을 변경하게 변경
    if (remainingTime < 300000) {
      setIsStart(true);
      clearTimeout(changeTimer);
    }
  }, []);

  useEffect(() => {
    changeTimer = setTimeout(changeCheck, remainingTime);
    // changeCheck();
    return () => {
      clearTimeout(changeTimer);
    };
  }, []);

  return (
    <div>
      {isStart ? <CookRoom roomId={roomId} /> : <WaitRoom roomId={roomId} />}
    </div>
  );
}

export default Room;
