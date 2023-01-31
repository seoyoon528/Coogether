import React from 'react';

import { Grid } from '@mui/material';

import RecipeBoxItem from './RecipeBoxItem ';

function RecipeBoxList(props) {
  const { DUMMY_RECIPE } = props;
  console.log(DUMMY_RECIPE);
  return (
    <Grid container spacing={2}>
      {DUMMY_RECIPE.map(recipe => {
        return (
          <Grid item xs={4} key={recipe.id}>
            <RecipeBoxItem recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RecipeBoxList;
