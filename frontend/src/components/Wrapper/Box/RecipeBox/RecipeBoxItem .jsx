import React from 'react';

import { RecipeBoxItemStyle } from './RecipeBoxItemStyle ';

function RecipeBoxItem({ recipe }) {
  const { name, thumbnail } = recipe;
  return (
    // 현 위치에는 서치 레시피 박스가 들어가야 한다
    <RecipeBoxItemStyle>
      <img src={thumbnail} alt={`${name} 이미지`} />
      <p>{name}</p>
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
