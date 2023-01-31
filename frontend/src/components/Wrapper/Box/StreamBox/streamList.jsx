import React from 'react';

import StreamItem from './streamItem';
import * as streamListStyle from './streamListStyle';

function StreamList(props) {
  const { DUMMY_ROOM } = props;
  return (
    <streamListStyle.CookRoomListWrapper>
      {DUMMY_ROOM.map(room => (
        <StreamItem
          key={room.id}
          roomId={room.id}
          roomName={room.title}
          recipe={room.recipe}
          startTime={room.startTime}
          targetTime={room.targetTime}
          thumbnail={room.thumbnail}
          anounce={room.anounce}
          king={room.king}
          users={room.users}
        />
      ))}
    </streamListStyle.CookRoomListWrapper>
  );
}

export default StreamList;
