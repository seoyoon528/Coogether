import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeBoxItemStyle } from './RecipeBoxItemStyle ';

function RecipeBoxItem({ recipe }) {
  const { name, thumbnail } = recipe;
  return (
    // 현 위치에는 SearchRecipeBox 가 들어가야 한다 => 쟤는 디자인만 해주는 애임
    <RecipeBoxItemStyle>
      <img src={thumbnail} alt={`${name} 이미지`} />
      <Link to="/Main">
        <h4>{name}</h4>
      </Link>
      <hr />
      <div>레시피 내용</div>
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
