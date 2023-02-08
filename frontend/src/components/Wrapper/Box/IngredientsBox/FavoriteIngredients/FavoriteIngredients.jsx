import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import axios from 'axios';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { Contents, Circle, Button } from './FavoriteIngredientsStyle';
// import StreamModal from '../../../../Modal/StreamModal/StreamModal';
// import StreamModalPicture from '../../../../Modal/StreamModal/StreamModalPicture';

function FavoriteIngredients({ category }) {
  const [visible, setVisible] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://i8b206.p.ssafy.io:9000/myIngredient/list/fav/1'
        );
        setFavorite([...response.data.map((v, a) => v.favoriteName)]);
        console.log(favorite);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  const favoriteIngredient = favorite.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          {selectIngredientId === i && visible && (
            <>
              <Button>
                <BookmarkAddRoundedIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
          {i}
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
