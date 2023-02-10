import React, { useState } from 'react';
import { Contents, Circle, Button, Box } from './SearchIngredientStyle';

function SearchIngredient({ searchIngre }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  console.log(searchIngre);
  const handleClick = ingredientName => {
    setselectIngredientId(ingredientName);
    setVisible(!visible);
  };

  return (
    <Contents>
      <Box>
        <h4>검색결과</h4>
      </Box>
      {searchIngre.length === 0
        ? ''
        : searchIngre.map(i => {
            return (
              <span>
                <Circle
                  key={i.ingredientId}
                  onClick={() => {
                    handleClick(i.ingredientId);
                  }}
                >
                  <img src={i.ingredientIcon} alt="검색아이콘" />
                </Circle>
                {i.ingredientName}
                {selectIngredientId === i.ingredientId && visible && (
                  <>
                    <Button>즐겨찾기</Button>
                    <Button>내 냉장고</Button>
                  </>
                )}
              </span>
            );
          })}
    </Contents>
  );
}
export default SearchIngredient;
