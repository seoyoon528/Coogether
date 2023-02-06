import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Background, H3, Button } from './RoomStyle';
import CookRoom from '../../components/Room/CookRoom';

function Room() {
  const params = useParams();

  // 시작체크
  const [isStart, setIsStart] = useState(false);

  const onStartCheck = () => {
    setIsStart(true);
  };

  const { roomId } = params;

  return (
    <Background>
      <CookRoom roomId={roomId} />
    </Background>
  );
}

export default Room;
