import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from './RoomStyle';
import CookRoom from '../../components/Room/CookRoom';

function Room() {
  const params = useParams();
  const userInfo = useSelector(state => state.user);
  console.log(userInfo);
  // 시작체크
  const [isStart, setIsStart] = useState(false);

  const onStartCheck = () => {
    setIsStart(true);
  };

  const { roomId } = params;

  return (
    <Background>
      <CookRoom roomId={roomId} userInfo={userInfo} />
    </Background>
  );
}

export default Room;
