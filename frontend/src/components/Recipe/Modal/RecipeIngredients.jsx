import React from 'react';

import { Stack } from '@mui/material';

export default function RecipeIngredients(props) {
  const { ingredients } = props;
  return (
    <Stack direction="column" spacing={2}>
      <h2>재료</h2>
      <ul>
        {ingredients.map((ingredient, idx) => {
          return (
            <li className="ingredients__item" key={`ingredients-${idx + 1}`}>
              <p className="name">{ingredient.name}</p>
              <p className="amount">{ingredient.amount}</p>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
