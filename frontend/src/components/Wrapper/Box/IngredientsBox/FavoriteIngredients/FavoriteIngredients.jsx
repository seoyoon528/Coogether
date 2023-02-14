import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import {
  Contents,
  Circle,
  Button,
  Container,
  Span,
} from './FavoriteIngredientsStyle';

function FavoriteIngredients({
  favorite,
  sumbitIngredient,
  favIngredient,
  favIngre,
}) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
  };
  const handleClickTwo = i => {
    setselectIngredientId(i.ingredient.ingredientId);
    setVisible(!visible);
  };

  const afterPatch = favIngre.map(i => {
    return (
      <Span key={i.ingredient.ingredientId}>
        <Circle
          key={i}
          onClick={() => {
            handleClickTwo(i);
          }}
        >
          <img src={i.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div>{i.ingredient.ingredientName}</div>
        {selectIngredientId === i.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(i.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkRemoveIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(i.ingredient);
                setVisible(!visible);
              }}
            >
              <KitchenIcon style={{ fontSize: '20px' }} />
            </Button>
          </>
        )}
      </Span>
    );
  });

  const favoriteIngredient = favorite.map(i => {
    return (
      <Span key={i.ingredientId}>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          <img src={i.ingredientIcon} alt="icon" />
        </Circle>
        <div>{i.ingredientName}</div>
        {selectIngredientId === i.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(i);
                setVisible(!visible);
              }}
            >
              <BookmarkRemoveIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                console.log(i);
                sumbitIngredient(i);
                setVisible(!visible);
              }}
            >
              <KitchenIcon style={{ fontSize: '20px' }} />
            </Button>
          </>
        )}
      </Span>
    );
  });

  return (
    <div>
      <Contents>
        <h4
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            zIndex: '1',
            backgroundColor: '#FFF8EA',
            paddingTop: '12px',
          }}
        >
          즐겨찾기
          <BookmarkAddRoundedIcon style={{ fontSize: '24px' }} />
        </h4>
        <Container>
          {favIngre.length > 0 ? afterPatch : favoriteIngredient}
        </Container>
      </Contents>
    </div>
  );
}

export default FavoriteIngredients;
