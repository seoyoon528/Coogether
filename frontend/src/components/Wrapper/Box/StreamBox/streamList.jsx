import React from 'react';
import { Grid } from '@mui/material';
import StreamItem from './streamItem';
import * as S from './streamListStyle';

function StreamList(props) {
  const { cookRoom } = props;
  return (
    <Grid
      container
      columns={12}
      columnSpacing={5}
      rowGap={3}
      justifyContent="space-between"
    >
      {cookRoom
        ? cookRoom.map(room => (
            <Grid key={room.cookingRoomId} item xs={6} md={4} lg={3}>
              <StreamItem room={room} />
            </Grid>
          ))
        : ''}
    </Grid>
  );
}

export default StreamList;
