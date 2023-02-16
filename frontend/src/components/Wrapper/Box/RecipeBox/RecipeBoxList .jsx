import React from 'react';

import { Grid } from '@mui/material';

import RecipeBoxItem from './RecipeBoxItem ';

function RecipeBoxList(props) {
  const { recepi } = props;

  return (
    <Grid
      container
      columns={12}
      columnSpacing={{ xs: 2, md: 5, lg: 8 }}
      justifyContent="space-evenly"
    >
      {recepi.map(recipe => {
        return (
          <Grid item key={recipe.recipeId} xs={5} md={4} lg={3}>
            <RecipeBoxItem recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RecipeBoxList;
