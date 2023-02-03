import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import CookRoom from '../../components/Room/CookRoom';
import WaitRoom from '../../components/Room/WaitRoom';

function Room() {
  const params = useParams();

  // 시작체크
  const [isStart, setIsStart] = useState(false);

  const onStartCheck = () => {
    setIsStart(true);
  };

  const { roomId } = params;

  return (
    <div>
      {isStart ? (
        <CookRoom roomId={roomId} />
      ) : (
        <WaitRoom roomId={roomId} onStartCheck={onStartCheck} />
      )}
    </div>
  );
}

export default Room;
