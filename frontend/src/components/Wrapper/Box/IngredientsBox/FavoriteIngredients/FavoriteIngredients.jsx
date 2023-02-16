import React, { useState } from 'react';

// MUI
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

// Style
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
  isFavPatched,
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
        <div style={{ fontSize: '1.6rem' }}>{i.ingredient.ingredientName}</div>
        {selectIngredientId === i.ingredient.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
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
          </div>
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
        <div style={{ fontSize: '1.6rem' }}>{i.ingredientName}</div>
        {selectIngredientId === i.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
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
                sumbitIngredient(i);
                setVisible(!visible);
              }}
            >
              <KitchenIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
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
        <Container>{isFavPatched ? afterPatch : favoriteIngredient}</Container>
      </Contents>
    </div>
  );
}

export default FavoriteIngredients;
