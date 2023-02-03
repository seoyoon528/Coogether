import React, { useState } from 'react';

// MUI
import { Box, Button, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

function IngredientInput(props) {
  const {
    onChange,
    data: { action, idx, className, value },
  } = props;

  return (
    <input
      type="text"
      placeholder={action === '재료명' ? '재료명' : '계량'}
      value={value}
      onChange={event => {
        const inputIngredientName = event.target.value;
        onChange(idx, inputIngredientName);
      }}
      className={className}
    />
  );
}

export default function RecipeIngredients(props) {
  const [isOptionOpened, setIsOptionOpened] = useState(false);

  // ingredients
  const { recipeIngredients, onClick: setRecipeIngredients } = props;

  // ingredient name 입력
  const nameInputHandler = (idx, ingredientName) => {
    setRecipeIngredients(prev => {
      const ingredients = prev;
      ingredients[idx].name = ingredientName;
      return [...ingredients];
    });
  };

  //   ingredient amount 입력
  const amountInputHandler = (idx, ingredientAmount) => {
    setRecipeIngredients(prev => {
      const ingredients = prev;
      ingredients[idx].amount = ingredientAmount;
      return [...ingredients];
    });
  };

  // ingredient 삭제
  const deleteIngredientInput = idx => {
    setRecipeIngredients(prev => {
      const ingredients = prev;
      ingredients.splice(idx, 1);
      return [...ingredients];
    });
  };

  // ingredient 입력 항목 추가
  const addInputBoxHnadler = payload => {
    const name = payload || '';
    setRecipeIngredients(prev => {
      return [
        ...prev,
        {
          id: `ingredient-${
            prev.length !== 0 ? prev[prev.length - 1].id + 1 : 1
          }`,
          name,
        },
      ];
    });
  };

  const openOptionHandler = () => {
    setIsOptionOpened(true);
  };

  const closeOptionHandler = () => {
    setIsOptionOpened(false);
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <div
        className={`recipe-register-ingredient__backdrop ${
          isOptionOpened ? 'active' : ''
        }`}
        onClick={closeOptionHandler}
        aria-hidden="true"
      />
      <Box gridColumn="span 2">
        <label htmlFor="recipe-register-ingredient__search">재료 등록</label>
      </Box>
      <Box gridColumn="span 10">
        <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
          <Box gridColumn="span 9" className="recipe-register__search-box">
            <input
              type="text"
              name=""
              id="recipe-register-ingredient__search"
              className="recipe-register-form__input"
              placeholder="재료를 입력해주세요"
              onFocus={openOptionHandler}
            />
            <ul
              className={`recipe-register-ingredient__option ${
                isOptionOpened ? 'active' : ''
              }`}
            >
              {recipeIngredients.map(ingredient => {
                return (
                  <li
                    key={ingredient.id}
                    onClick={() => {
                      addInputBoxHnadler(ingredient.name);
                      closeOptionHandler();
                    }}
                    aria-hidden="true"
                  >
                    {ingredient.name}
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
        {recipeIngredients.map((ingredient, idx) => {
          return (
            <Box
              display="grid"
              gridTemplateColumns="repeat(10, 1fr)"
              gap={2}
              key={ingredient.id}
            >
              <Box
                gridColumn="span 9"
                className="recipe-cook-ingredient__input"
              >
                <IngredientInput
                  onChange={nameInputHandler}
                  data={{
                    action: '재료명',
                    idx,
                    className:
                      'recipe-register-form__input recipe-cook-ingredient__name',
                    value: `${ingredient.name || ''}`,
                  }}
                />
                <IngredientInput
                  onChange={amountInputHandler}
                  data={{
                    action: '계량',
                    idx,
                    className:
                      'recipe-register-form__input recipe-cook-ingredient__amount',
                    value: `${ingredient.amount || ''}`,
                  }}
                />
              </Box>
              <Box
                gridColumn="span 1"
                sx={{ pb: 2 }}
                className="recipe-cook-button__delete"
              >
                <IconButton
                  onClick={() => {
                    deleteIngredientInput(idx);
                  }}
                >
                  <CancelPresentationIcon
                    fontSize="large"
                    sx={{ color: '#ffcc5e' }}
                  />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box gridColumn="span 2" />
      <Box gridColumn="span 9" sx={{ mx: 'auto' }}>
        <Button variant="contained" onClick={addInputBoxHnadler}>
          <p>추가</p>
        </Button>
      </Box>
    </Box>
  );
}
