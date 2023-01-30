import React from 'react';
import { Link } from 'react-router-dom';

function StreamItem(props) {
  const { roomId, roomName } = props;
  return (
    <div>
      {/* <Link to={`/Room/${id}`}>{roomName}</Link> */}
      {/* to 프롭을 객체로 묶어서 보낼 수 있음 이때 주소를 입력하려면 pathname 으로 사용 */}
      <Link
        to={{ pathname: `/Room/${roomId}`, state: { roomName: { roomName } } }}
      >
        {roomName}
      </Link>
    </div>
  );
}

export default StreamItem;
