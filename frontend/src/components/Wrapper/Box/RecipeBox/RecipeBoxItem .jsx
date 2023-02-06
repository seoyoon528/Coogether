import React, { useState } from 'react';

// Component
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

// Style
import { RecipeBoxItemStyle } from './RecipeBoxItemStyle ';

import ggim from '../../../../assets/img/김찌.jpg';

function RecipeBoxItem({ recipe }) {
  const { recipeName, thumbnail, recipeContent, recipeId } = recipe;
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
      {/* <img src={thumbnail} alt="이미지" /> */}
      <img src={ggim} alt="이미지" />
      <h4 onClick={openModal} aria-hidden="true">
        {recipeName}
      </h4>
      <hr />
      <div>{recipeContent}</div>
      <RecipeDetail open={isModalOpened} onClose={closeModal} recipe={recipe} />
    </RecipeBoxItemStyle>
  );
}

export default RecipeBoxItem;
