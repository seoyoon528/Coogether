import React from 'react';

function RecipeBoxItem({ recipe }) {
  const { name, content } = recipe;

  return (
    <div>
      <p>{name}</p>
      <p>{content}</p>
    </div>
  );
}

export default RecipeBoxItem;
