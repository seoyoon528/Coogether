import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Contents, Circle, Button } from './FavoriteIngredientsStyle';
// import StreamModal from '../../../../Modal/StreamModal/StreamModal';
// import StreamModalPicture from '../../../../Modal/StreamModal/StreamModalPicture';

function FavoriteIngredients({ favorite, sumbitIngredient, favIngredient }) {
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
        {selectIngredientId === i && visible && (
          <>
            <Button
              onClick={() => {
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
