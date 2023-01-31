import React from 'react';

import { RecipeBoxItemStyle } from './RecipeBoxItemStyle ';

function RecipeBoxItem({ recipe }) {
  const { name, image } = recipe;

  return (
    <RecipeBoxItemStyle>
      <p>{name}</p>
      <img src={image} alt={`${name} 이미지`} />
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
