import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

// Style
import { RecipeBoxItemStyle, UnderLine } from './RecipeBoxItemStyle ';

function RecipeBoxItem({ recipe }) {
  const { recipeName, recipeImg, recipeId } = recipe;

  // Modal 상태
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <RecipeBoxItemStyle>
      <div onClick={openModal} aria-hidden="true">
        <img src={recipeImg} alt="이미지" />
        <h4>{recipeName}</h4>
      </div>
      <UnderLine />
      <RecipeDetail open={isModalOpened} onClose={closeModal} recipe={recipe} />
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
