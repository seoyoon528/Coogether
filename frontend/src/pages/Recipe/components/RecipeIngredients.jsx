import React, { useState } from 'react';

// MUI
import { Box, Button, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

// Component
// import RecipeRegisterModal from './RecipeRegisterModal';

export default function RecipeIngredients(props) {
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
  const addInputBoxHnadler = () => {
    setRecipeIngredients(prev => {
      return [
        ...prev,
        {
          id: `ingredient-${
            prev.length !== 0 ? prev[prev.length - 1].id + 1 : 1
          }`,
        },
      ];
    });
  };

  // modal
  const [isModalOpened, setIsModalOpened] = useState(false);
  // Modal 여는 함수
  const openModal = () => {
    setIsModalOpened(true);
  };
  // Modal 닫는 함수
  const closeModal = () => {
    setIsModalOpened(false);
  };

  //

  // 모달에서 폼 제출시 실행되는 함수
  const modalSubmitHandler = () => {};

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-register-ingredient__search">재료 등록</label>
      </Box>
      <Box gridColumn="span 10">
        <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
          <Box gridColumn="span 9">
            <input
              type="text"
              name=""
              id="recipe-register-ingredient__search"
              placeholder="재료를 검색하세요"
            />
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
                <input
                  onChange={event => {
                    const inputIngredientName = event.target.value;
                    nameInputHandler(idx, inputIngredientName);
                  }}
                  type="text"
                  className="recipe-cook-ingredient__name"
                  value={ingredient.name || ''}
                  placeholder="재료명"
                />
                <input
                  type="text"
                  onChange={event => {
                    const inputIngredientAmount = event.target.value;
                    amountInputHandler(idx, inputIngredientAmount);
                  }}
                  className="recipe-cook-ingredient__amount"
                  value={ingredient.amount || ''}
                  placeholder="계량"
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
      <Box gridColumn="span 2">
        {/* <div>
          {isModalOpened && (
            <RecipeRegisterModal
              onClose={closeModal}
              onConfirm={modalSubmitHandler}
              open={isModalOpened}
            />
          )}
          <Button variant="contained" onClick={openModal}>
            <p>한번에 등록</p>
          </Button>
        </div> */}
      </Box>
      <Box gridColumn="span 9" sx={{ mx: 'auto' }}>
        <Button variant="contained" onClick={addInputBoxHnadler}>
          <p>추가</p>
        </Button>
      </Box>
    </Box>
  );
}
