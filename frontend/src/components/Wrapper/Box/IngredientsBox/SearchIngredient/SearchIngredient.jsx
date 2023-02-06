import React, { useState } from 'react';
import { Contents, Circle, Button, Box } from './SearchIngredientStyle';

function SearchIngredient({ ingredientName }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = ingredientName => {
    setselectIngredientId(ingredientName);
    setVisible(!visible);
  };

  return (
    <Contents>
      <Box>
        <h4>검색결과</h4>
      </Box>
      {ingredientName.length === 0 ? (
        ''
      ) : (
        <span>
          <Circle
            key={ingredientName}
            onClick={() => {
              handleClick(ingredientName);
            }}
          >
            {ingredientName}
            {selectIngredientId === ingredientName && visible && (
              <>
                <Button>즐겨찾기</Button>
                <Button>내 냉장고</Button>
              </>
            )}
          </Circle>
        </span>
      )}
    </Contents>
  );
}
export default SearchIngredient;
