import React from 'react';

import StreamItem from './streamItem';
import * as S from './streamListStyle';

function StreamList(props) {
  const { cookRoom } = props;
  console.log(cookRoom);
  return (
    <>
      {cookRoom
        ? cookRoom.map(room => (
            <StreamItem key={room.cookingRoomId} room={room} />
          ))
        : ''}
    </>
  );
}

export default StreamList;
