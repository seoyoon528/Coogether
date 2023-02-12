import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Contents, Circle, Button } from './FavoriteIngredientsStyle';
// import StreamModal from '../../../../Modal/StreamModal/StreamModal';
// import StreamModalPicture from '../../../../Modal/StreamModal/StreamModalPicture';

function FavoriteIngredients({
  favorite,
  sumbitIngredient,
  favIngredient,
  favIngre,
}) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    console.log(i);
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
    console.log(i.ingredientId);
  };

  const handleClickTwo = e => {
    console.log(e);
    setselectIngredientId(e.ingredient.ingredientId);
    setVisible(!visible);
    console.log(e.ingredient.ingredientId);
  };

  const favoriteIngredient = favorite.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          <img src={i.ingredientIcon} alt="icon" />
        </Circle>
        {i.ingredientName}
        {selectIngredientId === i.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                console.log(i);
                favIngredient(i);
              }}
            >
              <BookmarkRemoveIcon />
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
  });

  const afterPatch = favIngre.map(f => {
    console.log(f);
    return (
      <span>
        <Circle
          key={f}
          onClick={() => {
            handleClickTwo(f);
          }}
        >
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {f.ingredient.ingredientName}
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(f);
              }}
            >
              <BookmarkRemoveIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f);
              }}
            >
              <KitchenRoundedIcon />
            </Button>
          </>
        )}
      </span>
    );
  });

  if (favIngre.length > 0) {
    return (
      <div>
        <Contents>
          <h4>
            즐겨찾기
            <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
          </h4>
          {afterPatch}
        </Contents>
      </div>
    );
  }

  return (
    <div>
      <Contents>
        <h4>
          즐겨찾기
          <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
        </h4>
        {favoriteIngredient}
      </Contents>
    </div>
  );
}

export default FavoriteIngredients;
