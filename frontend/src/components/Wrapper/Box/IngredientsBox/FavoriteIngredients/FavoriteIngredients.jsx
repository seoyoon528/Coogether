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
    setselectIngredientId(i);
    setVisible(!visible);
  };

  const favoriteIngredient = favorite.map(i => {
    return (
      <span>
        <Circle
          key={i.ingredientId}
          onClick={() => {
            handleClick(i.ingredientId);
          }}
        >
          <img src={i.ingredientIcon} alt="icon" />
        </Circle>
        {i.ingredientName}
        {selectIngredientId === i.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(i.ingredientId);
              }}
            >
              <BookmarkRemoveIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(i.ingredientId);
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
          key={f.ingredient.ingredientId}
          onClick={() => {
            handleClick(f.ingredient.ingredientId);
          }}
        >
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {f.ingredient.ingredientName}
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(f.ingredient.ingredientId);
              }}
            >
              <BookmarkRemoveIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f.ingredient.ingredientId);
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
