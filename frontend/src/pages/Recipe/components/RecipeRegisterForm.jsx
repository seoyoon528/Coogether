import React, { useRef, useState } from 'react';

// MUI
import { Button, Stack, Box } from '@mui/material';

// Component
import RecipeCookName from './RecipeCookName';
import RecipeFoodCategory from './RecipeFoodCategory';
import RecipeCookImage from './RecipeCookImage';
import RecipeIngredients from './RecipeIngredients';
import RecipeOrders from './RecipeOrders';

function RecipeRegisterForm() {
  // 요리 이름
  const cookNameRef = useRef();
  // 요리 분류
  const [selectedCategory, setSelectedCategory] = useState('');
  // 요리 이미지
  const [cookImage, setCookImage] = useState('');
  // 요리 재료
  const [recipeIngredients, setRecipeIngredients] = useState([
    { id: 'ingredient-1' },
    { id: 'ingredient-2' },
    { id: 'ingredient-3' },
  ]);
  // 요리 순서
  const [recipeOrders, setRecipeOrders] = useState([
    { id: 'order-1' },
    { id: 'order-2' },
  ]);

  // 한번에 입력하기
  // const modalConfirmHandler = data => {
  //   const enteredIngredients = data.trim().split(',');
  //   setIngredients(prev => {
  //     const ingredients = prev;
  //     enteredIngredients.forEach(ingredient => {
  //       const [name, amount] = ingredient.trim().split(' ');
  //       ingredients.push({ name, amount });
  //     });
  //     return [...ingredients];
  //   });
  // };

  // form 제출
  const recipeSubmitHandler = event => {
    event.preventDefault();

    console.log(
      cookNameRef.current.value,
      selectedCategory,
      cookImage,
      recipeIngredients,
      recipeOrders
    );
  };

  return (
    <form className="recipe-register__form">
      <Stack spacing={5}>
        <RecipeCookName cookNameRef={cookNameRef} />
        <RecipeFoodCategory
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <RecipeCookImage cookImage={cookImage} onChange={setCookImage} />
        <RecipeIngredients
          recipeIngredients={recipeIngredients}
          onClick={setRecipeIngredients}
        />
        <hr color="#ffcc5e" />
        <RecipeOrders recipeOrders={recipeOrders} onClick={setRecipeOrders} />
        <hr color="#ffcc5e" />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 2" />
          <Box gridColumn="span 9" sx={{ mx: 'auto' }}>
            <Button variant="contained" onClick={recipeSubmitHandler}>
              <p>등록</p>
            </Button>
          </Box>
        </Box>
      </Stack>
    </form>
  );
}

export default RecipeRegisterForm;
