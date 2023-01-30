import React from 'react';
import { Link } from 'react-router-dom';

function StreamItem(props) {
  const {
    roomId,
    roomName,
    recipe,
    startTime,
    thumbnail,
    anounce,
    king,
    targetTime,
  } = props;

  return (
    <div>
      {/* <Link to={`/Room/${id}`}>{roomName}</Link> */}
      {/* to 프롭을 객체로 묶어서 보낼 수 있음 이때 주소를 입력하려면 pathname 으로 사용 */}
      <img src={thumbnail} alt="이미지 오류" />
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
        <h4>제목 : {roomName}</h4>
      </Link>
      <p>요리대장 : {king}</p>
      <p>#{recipe}</p>
    </div>
  );
}

export default StreamItem;
