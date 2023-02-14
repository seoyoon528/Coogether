import React, { useState, useEffect } from 'react';

import axios from 'axios';

// MUI
import { Box, Autocomplete, TextField } from '@mui/material';

// Component
import RecipeIngredientsInput from './RecipeIngredientsInput';

export default function RecipeIngredients(props) {
  // Props
  const { recipeIngredients, setRecipeIngredients } = props;

  // useState
  const [storedIngredients, setStoredIngredients] = useState([]);

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: 'https://i8b206.p.ssafy.io:9000/api/ingredient/list/total',
      method: 'GET',
    };
    try {
      const response = await axios(requestInfo);
      setStoredIngredients(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // function
  // ingredient amount 입력
  const amountInputHandler = (idx, ingredientAmount) => {
    setRecipeIngredients(prev => {
      const ingredients = prev;
      ingredients[idx].ingredientAmount = ingredientAmount;
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

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-register-ingredient__search">재료 등록</label>
      </Box>
      <Box gridColumn="span 10">
        <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
          <Box gridColumn="span 9" className="recipe-register__search-box">
            <div>
              <Autocomplete
                disablePortal
                id="recipe-register__autocomplete"
                noOptionsText="검색 결과가 없습니다"
                options={storedIngredients}
                onChange={(event, newValue) => {
                  if (newValue && newValue.ingredientName) {
                    setRecipeIngredients(prev => {
                      return [...prev, newValue];
                    });
                  }
                }}
                blurOnSelect
                getOptionLabel={option => {
                  return option.ingredientName || '';
                }}
                sx={{
                  '& .MuiFormControl-root': {
                    backgroundColor: 'white',
                  },
                  '& .MuiFormControl-root .MuiInputBase-root': {
                    height: '5.6rem',
                    padding: '1.6rem',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '0.5px solid #505050',
                  },
                  '& .MuiFormControl-root .MuiInputBase-root .MuiInputBase-input':
                    {
                      height: '100%',
                      padding: 0,
                      fontFamily: 'Pretendard Medium',
                      fontSize: '1.6rem',
                      '::placeholder': {
                        color: '#505050',
                        fontFamily: 'Pretendard Regular',
                        opacity: '1',
                      },
                    },
                  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
                    padding: '1.6rem',
                    fontSize: '1.6rem',
                    fontFamily: 'Pretendard Regular',
                  },
                  '& + .MuiAutocomplete-popper .MuiAutocomplete-noOptions': {
                    fontSize: '1.6rem',
                    padding: '1.6rem',
                    fontFamily: 'Pretendard Regular',
                  },
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    name="ingredientListRequest"
                    placeholder="재료를 검색하세요"
                    sx={{ border: 'none' }}
                  />
                )}
              />
            </div>
          </Box>
        </Box>
        {recipeIngredients.map((ingredient, idx) => {
          return (
            <RecipeIngredientsInput
              key={ingredient.ingredientId}
              idx={idx}
              amountInputHandler={amountInputHandler}
              deleteIngredientInput={deleteIngredientInput}
              ingredient={ingredient}
            />
          );
        })}
      </Box>
    </Box>
  );
}
