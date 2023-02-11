import React from 'react';

// MUI
import { Grid } from '@mui/material';

function UserInfoBox(props) {
  // Props
  const { className, children } = props;

  return (
    <Grid container columnSpacing={13} column={12} className={className}>
      <Grid item xs={4}>
        {children[0]}
      </Grid>
      <Grid item xs={8}>
        {children[1]}
      </Grid>
    </Grid>
  );
}

export default UserInfoBox;
