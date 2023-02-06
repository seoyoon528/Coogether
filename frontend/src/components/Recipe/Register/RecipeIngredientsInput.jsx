import React from 'react';

// MUI
import { Box, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function RecipeIngredientsInput(props) {
  const {
    ingredient: { ingredientName, ingredientAmount },
    amountInputHandler,
    deleteIngredientInput,
    idx,
  } = props;
  return (
    <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
      <Box gridColumn="span 9" className="recipe-cook-ingredient__input">
        <input
          className="recipe-register-form__input recipe-cook-ingredient__name"
          value={ingredientName}
          readOnly
        />
        <input
          onChange={event => {
            amountInputHandler(idx, event.target.value);
          }}
          className="recipe-register-form__input recipe-cook-ingredient__amount"
          value={`${ingredientAmount || ''}`}
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
          <CancelPresentationIcon fontSize="large" sx={{ color: '#ffcc5e' }} />
        </IconButton>
      </Box>
    </Box>
  );
}
