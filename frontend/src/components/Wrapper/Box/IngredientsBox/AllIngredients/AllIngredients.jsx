import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { useDispatch, useSelector } from 'react-redux';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Wrapper } from './AllIngredientsStyle';

function AllIngredients({ category, ingredients, allIngredient }) {
  const accessToken = useSelector(state => state.user.accessToken);
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');

  const handleClick = i => {
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
    console.log(i.ingredientId);
  };

  const categoryKorean = dummy.categories
    .filter(name => name.id === category)
    .map(name => {
      return <h4>{name.text} 전체</h4>;
    });

  // // bookmark로 보내는 것
  // function bookMark() {
  //   const handleClick = i => {
  //     setselectIngredientId(i);
  //   };
  //   const patchBookmark = async () => {
  //     await axios.patch(
  //       `http://i8b206.p.ssafy.io:9000//myIngredient/create/fav/1/${setselectIngredientId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         body:
  //       });
  //   };
  // }

  // access 토큰
  // headers: {
  //   Authorization: `Bearer ${accessToken}`
  //  }

  const ingredient = ingredients.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            sumbitMyIngredient(i);
            handleClick(i);
          }}
        >
          {selectIngredientId === i.ingredientId && visible && (
            <>
              <Button
                onClick={() => {
                  sumbitMyIngredient(i);
                }}
              >
                <BookmarkAddRoundedIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
          {i.ingredientName}
        </Circle>
      </span>
    );
  });

  const AllIngredient = allIngredient.map(e => {
    return (
      <span>
        <Circle
          key={e}
          onClick={() => {
            handleClick(e);
          }}
        >
          {selectIngredientId === e.ingredientId && visible && (
            <>
              <Button
                onClick={() => {
                  sumbitMyIngredient(e);
                }}
              >
                <BookmarkAddRoundedIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
          {e.ingredientName}
        </Circle>
      </span>
    );
  });

  if (category === 'ALL') {
    return (
      <div>
        <Contents>
          <h4>재료 전체</h4>
          {AllIngredient}
        </Contents>
      </div>
    );
  }
  return (
    <div>
      <Contents>
        {categoryKorean}
        {ingredient}
        {/* {ingredientName.length === 0
          ? ingredient
          : ingredientName
              .filter(
                (element, index) => category === ingredientCategory[index]
              )
              .map((element, index) => {
                return <div key={element}>{element}</div>;
              })} */}
      </Contents>
    </div>
  );
}

export default AllIngredients;
