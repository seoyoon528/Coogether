import React, { useState } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { Contents, Circle, Button, Box, H4 } from './SearchIngredientStyle';

function SearchIngredient({ searchIngre, favIngredient, sumbitIngredient }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  console.log(searchIngre);
  const handleClick = ingredientName => {
    setselectIngredientId(ingredientName);
    setVisible(!visible);
  };

  return (
    <Contents>
      <h4>검색결과</h4>
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
                    <Button
                      onClick={() => {
                        favIngredient(i);
                      }}
                    >
                      <BookmarkAddRoundedIcon />
                    </Button>
                    <Button
                      onClick={() => {
                        sumbitIngredient(i);
                      }}
                    >
                      <KitchenRoundedIcon />
                    </Button>
                  </>
                )}
              </span>
            );
          })}
    </Contents>
  );
}
export default SearchIngredient;
