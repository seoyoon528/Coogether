import React, { useRef, useState } from 'react';

import axios from 'axios';

// MUI
import { Button, Stack, Box } from '@mui/material';

// Component
import RecipeCookName from './RecipeCookName';
import RecipeFoodCategory from './RecipeFoodCategory';
import RecipeCookImage from './RecipeCookImage';
import RecipeIngredients from './RecipeIngredients';
import RecipeOrders from './RecipeOrders';
import NextBtn from '../../Btn/NextBtn/NextBtn';

function RecipeRegisterForm() {
  // 요리 이름
  const cookNameRef = useRef();
  // 요리 분류
  const [selectedCategory, setSelectedCategory] = useState('no-select');
  // 요리 이미지
  const [cookImage, setCookImage] = useState('');
  // 요리 재료
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  // 요리 순서
  const [recipeOrders, setRecipeOrders] = useState([
    { id: 'order-1' },
    { id: 'order-2' },
  ]);

  // form 제출
  const recipeSubmitHandler = async event => {
    event.preventDefault();
    const formData = new FormData();
    const recipeName = cookNameRef.current.value;
    const recipeCategory = selectedCategory;
    const recipeImg = cookImage;
    const ingredientListRequest = recipeIngredients.map(
      ({ ingredientId, ingredientAmount }) => {
        return { ingredientId, ingredientAmount };
      }
    );
    const recipeStepRequest = recipeOrders.map(({ content }, idx) => {
      return { recipeStepNum: idx + 1, recipeStepContent: content };
    });
    const recipeType = 'CUSTOM';

    formData.append('recipeName', recipeName);
    formData.append('recipeCategory', recipeCategory);
    formData.append('recipeImg', recipeImg);
    formData.append('ingredientListRequest', ingredientListRequest);
    formData.append('recipeStepRequest', recipeStepRequest);
    formData.append('recipeType', recipeType);

    const requestInfo = {
      url: 'http://i8b206.p.ssafy.io:9000/recipe/create/1',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    console.log(requestInfo);

    try {
      const response = await axios(requestInfo);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="recipe-register__form" onSubmit={recipeSubmitHandler}>
      <Stack spacing={5}>
        <RecipeCookName cookNameRef={cookNameRef} />
        <RecipeFoodCategory
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <RecipeCookImage cookImage={cookImage} onChange={setCookImage} />
        <RecipeIngredients
          recipeIngredients={recipeIngredients}
          setRecipeIngredients={setRecipeIngredients}
        />
        <hr color="#ffcc5e" />
        <RecipeOrders recipeOrders={recipeOrders} onClick={setRecipeOrders} />
        <hr color="#ffcc5e" />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 2" />
          <Box
            gridColumn="span 9"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <button>등록</button>
          </Box>
        </Box>
      </Stack>
    </form>
  );
}

export default RecipeRegisterForm;
