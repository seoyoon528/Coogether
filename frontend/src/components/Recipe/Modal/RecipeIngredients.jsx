import React from 'react';

// MUI
import { Stack } from '@mui/material';

export default function RecipeIngredients(props) {
  // Props
  const { ingredients } = props;

  return (
    <Stack direction="column" spacing={2}>
      <h2>재료</h2>
      <ul>
        {ingredients.map(
          ({
            ingredientListId,
            ingredient: { ingredientName },
            ingredientAmount,
          }) => {
            return (
              <li className="ingredients__item" key={ingredientListId}>
                <p className="name">{ingredientName}</p>
                <p className="amount">{ingredientAmount}</p>
              </li>
            );
          }
        )}
      </ul>
    </Stack>
  );
}
