import React from 'react';

// MUI
import { Box } from '@mui/material';

export default function RecipeCookName(props) {
  // Props
  const { cookNameRef } = props;

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-cook-name">요리 이름</label>
      </Box>
      <Box gridColumn="span 9">
        <input
          type="text"
          name="recipeName"
          id="recipe-cook-name__input"
          className="recipe-register-form__input"
          ref={cookNameRef}
          placeholder="예) 순두부 김치찌개"
        />
      </Box>
    </Box>
  );
}
