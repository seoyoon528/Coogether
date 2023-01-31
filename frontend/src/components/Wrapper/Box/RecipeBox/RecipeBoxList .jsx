import React, { useState } from 'react';

import RecipeBoxItem from './RecipeBoxItem ';

const DUMMY_DATA = [
  { id: '레시피 아이디1', name: '이름1', content: '레시피 내용1' },
  { id: '레시피 아이디2', name: '이름2', content: '레시피 내용2' },
  { id: '레시피 아이디3', name: '이름3', content: '레시피 내용3' },
  { id: '레시피 아이디4', name: '이름4', content: '레시피 내용4' },
];

function RecipeBox() {
  const [recipes, setRecipes] = useState(DUMMY_DATA);
  return (
    <div>
      {recipes.map(recipe => {
        return <RecipeBoxItem recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
}

export default RecipeBox;
