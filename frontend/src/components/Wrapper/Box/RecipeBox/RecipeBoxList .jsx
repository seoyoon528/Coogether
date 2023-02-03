import React from 'react';

import { Grid } from '@mui/material';

import RecipeBoxItem from './RecipeBoxItem ';

function RecipeBoxList(props) {
  const { recepi } = props;
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      {recepi.map(recipe => {
        return (
          <Grid item key={recipe.recipeId}>
            <RecipeBoxItem recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RecipeBoxList;
