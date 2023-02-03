import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeBoxItemStyle } from './RecipeBoxItemStyle ';

function RecipeBoxItem({ recipe }) {
  const { recipeName, thumbnail, recipeContent, recipeId } = recipe;
  return (
    <RecipeBoxItemStyle>
      <img src={thumbnail} alt="이미지" />
      <Link to={`/Recipe/${recipeId}`}>
        <h4>{recipeName}</h4>
      </Link>
      <hr />
      <div>{recipeContent}</div>
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
