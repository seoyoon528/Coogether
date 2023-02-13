import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import Dialog from '@mui/material/Dialog';

// Component
import CookRoomEnterModalContent from './CookRoomEnterModalContent';

export default function CookRoomEnterModal(props) {
  // Props
  const {
    isCookRoomEnterModalOpened,
    setIsCookRoomEnterModalOpened,
    cookingRoomId,
    recipe: { recipeId, recipeName },
  } = props;

  // Redux
  const { userSeq } = useSelector(state => {
    return state.user;
  });
  const accessToken = useSelector(state => state.user.accessToken);

  // 레시피 속 재료
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  // 없는 재료
  const [notHavingIngredients, setNotHavingIngredients] = useState([]);

  //   레시피 전체 재료 요청 및 저장
  useEffect(async () => {
    if (userSeq) {
      const requestInfo = {
        url: `https://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
        method: 'GET',
      };
      try {
        const recipeIngredientsResponse = await axios(requestInfo);
        const recipeIngredients = await recipeIngredientsResponse.data;
        requestInfo.url = `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/cooking/${userSeq}/${recipeId}`;
        requestInfo.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        const myIngredientsResponse = await axios(requestInfo);
        const myIngredients = await myIngredientsResponse.data;

        setNotHavingIngredients(
          recipeIngredients.filter(
            ({ ingredient: { ingredientId: recipeIngredientId } }) => {
              return !myIngredients.some(({ ingredient: { ingredientId } }) => {
                return ingredientId === recipeIngredientId;
              });
            }
          )
        );

        setRecipeIngredients(recipeIngredients);
      } catch (error) {
        console.log(error);
      }
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
