import React from 'react';

function WaitRoom(props) {
  const { onStartCheck } = props;

  const startHandler = () => {
    onStartCheck();
  };
  return (
    <div>
      <h1>대기방입니다</h1>
      <button onClick={startHandler}>시작</button>
    </div>
  );
}

export default WaitRoom;
