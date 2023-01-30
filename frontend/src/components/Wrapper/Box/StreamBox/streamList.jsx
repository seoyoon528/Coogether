import React from 'react';

import StreamItem from './streamItem';

function StreamList(props) {
  const { DUMMY_ROOM } = props;
  return (
    <div>
      {DUMMY_ROOM.map(room => (
        <StreamItem
          key={room.id}
          roomId={room.id}
          roomName={room.title}
          recipe={room.recipe}
          startTime={room.startTime}
          thumbnail={room.thumbnail}
          anounce={room.anounce}
          king={room.king}
        />
      ))}
    </div>
  );
}

export default StreamList;
