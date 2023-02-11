import React from 'react';

// MUI
import { Grid } from '@mui/material';

function UserInfoBox(props) {
  // Props
  const { className, children } = props;

  return (
    <Grid
      container
      columnSpacing={{ xs: 5, lg: 10 }}
      column={12}
      className={className}
    >
      <Grid item xs={3}>
        {children[0]}
      </Grid>
      <Grid item xs={9}>
        {children[1]}
      </Grid>
    </Grid>
  );
}

export default UserInfoBox;
