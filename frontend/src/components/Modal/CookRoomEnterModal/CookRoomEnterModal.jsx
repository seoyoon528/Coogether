import React, { useEffect, useState } from 'react';

import axios from 'axios';

// MUI
import Dialog from '@mui/material/Dialog';

// Component
import CookRoomEnterModalContent from './CookRoomEnterModalContent';

export default function CookRoomEnterModal(props) {
  const {
    isCookRoomEnterModalOpened,
    setIsCookRoomEnterModalOpened,
    cookingRoomId,
    recipe: { recipeId, recipeName },
  } = props;

  // 레시피 속 재료
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  // 없는 재료
  const [notHavingIngredients, setNotHavingIngredients] = useState([]);
  const userSeq = 1;
  //   레시피 전체 재료 요청 및 저장
  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
      method: 'GET',
    };
    try {
      const recipeIngredientsResponse = await axios(requestInfo);
      const recipeIngredients = await recipeIngredientsResponse.data;

      requestInfo.url = `http://i8b206.p.ssafy.io:9000/api/myIngredient/list/cooking/${userSeq}/${recipeId}`;
      const myIngredientsResponse = await axios(requestInfo);
      const myIngredients = await myIngredientsResponse.data;

      setNotHavingIngredients(
        recipeIngredients.filter(({ ingredient: { ingredientId } }) => {
          const checkId = ingredientId;
          return myIngredients.some(({ ingredient: { ingredientId } }) => {
            return ingredientId === checkId;
          });
        })
      );

      setRecipeIngredients(recipeIngredients);
    } catch (error) {
      console.log(error);
    }
  }, [recipeId, userSeq]);

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isCookRoomEnterModalOpened}
      onClose={() => {
        setIsCookRoomEnterModalOpened(false);
      }}
    >
      <CookRoomEnterModalContent
        recipeIngredients={recipeIngredients}
        notHavingIngredients={notHavingIngredients}
        recipeName={recipeName}
        setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
        cookingRoomId={cookingRoomId}
      />
    </Dialog>
  );
}
