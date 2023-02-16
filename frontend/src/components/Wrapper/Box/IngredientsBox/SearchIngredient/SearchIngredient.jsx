import React, { useState } from 'react';

// MUI
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';

// Style
import {
  Contents,
  Circle,
  Button,
  Container,
  Span,
} from './SearchIngredientStyle';

function SearchIngredient({ searchIngre, favIngredient, sumbitIngredient }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');

  const handleClick = ingredientName => {
    setselectIngredientId(ingredientName);
    setVisible(!visible);
  };

  const searchIngredients =
    searchIngre.length === 0
      ? ''
      : searchIngre.map(i => {
          return (
            <Span key={i.ingredientId}>
              <Circle
                key={i.ingredientId}
                onClick={() => {
                  handleClick(i.ingredientId);
                }}
              >
                <img src={i.ingredientIcon} alt="검색아이콘" />
              </Circle>
              <div style={{ fontSize: '1.6rem' }}>{i.ingredientName}</div>

              {selectIngredientId === i.ingredientId && visible && (
                <div style={{ display: 'flex' }}>
                  <Button
                    onClick={() => {
                      favIngredient(i);
                      setVisible(!visible);
                    }}
                  >
                    <BookmarkAddRoundedIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      sumbitIngredient(i);
                      setVisible(!visible);
                    }}
                  >
                    <KitchenIcon />
                  </Button>
                </div>
              )}
            </Span>
          );
        });

  return (
    <div>
      <Contents>
        <h4>검색결과</h4>
        <Container>{searchIngredients}</Container>
      </Contents>
    </div>
  );
}
export default SearchIngredient;
