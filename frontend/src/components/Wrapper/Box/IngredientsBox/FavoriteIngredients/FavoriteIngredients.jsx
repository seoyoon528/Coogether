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
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
  };
  const handleClickTwo = i => {
    setselectIngredientId(i.ingredient.ingredientId);
    setVisible(!visible);
    console.log(i.ingredient.ingredientId);
  };
  const afterPatch = favIngre.map(i => {
    console.log(i.ingredient.ingredientId);
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClickTwo(i);
          }}
        >
          <img src={i.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {i.ingredient.ingredientName}
        {selectIngredientId === i.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                console.log(i.ingredient);
                favIngredient(i.ingredient);
              }}
            >
              <BookmarkRemoveIcon />
            </Button>
            <Button
              onClick={() => {
                console.log(i.ingredient);
                sumbitIngredient(i.ingredient);
              }}
            >
              <KitchenRoundedIcon />
            </Button>
          </>
        )}
      </span>
    );
  });

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
                console.log(i);
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

  return (
    <div>
      <Contents>
        <h4>
          즐겨찾기
          <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
        </h4>
        {favIngre.length > 0 ? afterPatch : favoriteIngredient}
      </Contents>
    </div>
  );
}

export default FavoriteIngredients;
