import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import axios from 'axios';
import { Contents, Circle, Button } from './FavoriteIngredientsStyle';
// import StreamModal from '../../../../Modal/StreamModal/StreamModal';
// import StreamModalPicture from '../../../../Modal/StreamModal/StreamModalPicture';

function FavoriteIngredients({ favorite }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };

  const favoriteName = favorite.map(num => {
    return num.ingredientName;
  });

  const favoriteIngredient = favoriteName.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          {i}
          {selectIngredientId === i && visible && (
            <>
              <Button>
                <BookmarkRemoveIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
        </Circle>
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
