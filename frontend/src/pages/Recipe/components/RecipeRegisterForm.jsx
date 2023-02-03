import React, { useRef, useState } from 'react';

// MUI
import { Button, Stack, Grid } from '@mui/material';

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
  const [selectedCategory, setSelectedCategory] = useState('no-select');
  // 요리 이미지
  const [cookImage, setCookImage] = useState('');
  // 요리 재료
  const [recipeIngredients, setRecipeIngredients] = useState([
    { id: 'ingredient-1', name: '요리명' },
    { id: 'ingredient-2', name: '요리명' },
    { id: 'ingredient-3', name: '요리명' },
  ]);
  // 요리 순서
  const [recipeOrders, setRecipeOrders] = useState([
    { id: 'order-1' },
    { id: 'order-2' },
  ]);

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
        <Grid container columnSpacin={2}>
          <Grid item xs={2} />
          <Grid item xs={9} className="recipe-register-form__submit-button">
            <Button variant="contained" onClick={recipeSubmitHandler}>
              <p>등록</p>
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
}

export default RecipeRegisterForm;
