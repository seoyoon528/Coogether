import React from 'react';

// Component
import CookEnterModalHeader from './CookEnterModalHeader';
import CookEnterModalMain from './CookEnterModalMain';
import CookEnterModalFooter from './CookEnterModalFooter';

// Style
import { CookRoomEnterModalContentStyle } from './CookRoomEnterModalContentStyle';

export default function CookRoomEnterModalContent(props) {
  const {
    recipeName,
    recipeIngredients,
    notHavingIngredients,
    setIsCookRoomEnterModalOpened,
    cookingRoomId,
    onCookRoomModalClose,
  } = props;

  return (
    <CookRoomEnterModalContentStyle>
      <CookEnterModalHeader />
      <CookEnterModalMain
        recipeName={recipeName}
        recipeIngredients={recipeIngredients}
        notHavingIngredients={notHavingIngredients}
      />
      <CookEnterModalFooter
        setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
        cookingRoomId={cookingRoomId}
      />
    </CookRoomEnterModalContentStyle>
  );
}
