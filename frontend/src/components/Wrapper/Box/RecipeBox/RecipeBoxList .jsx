import React, { useState } from 'react';
import axios from 'axios';

import { Grid } from '@mui/material';

import RecipeBoxItem from './RecipeBoxItem ';

function RecipeBoxList(props) {
  const { recepi } = props;

  return (
    <Grid
      container
      columns={12}
      columnSpacing={5}
      rowSpacing={4}
      // rowGap={3}
      justifyContent="space-evenly"
    >
      {recepi.map(recipe => {
        return (
          <Grid item key={recipe.recipeId} xs={6} md={4} lg={3}>
            <RecipeBoxItem recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RecipeBoxList;
