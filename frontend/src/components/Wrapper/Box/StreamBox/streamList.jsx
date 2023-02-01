import React from 'react';

import StreamItem from './streamItem';
import * as S from './streamListStyle';

function StreamList(props) {
  const { DUMMY_ROOM } = props;
  return (
    <>
      {DUMMY_ROOM.map(room => (
        <StreamItem key={room.roomId} room={room} />
      ))}
    </>
  );
}

export default StreamList;
