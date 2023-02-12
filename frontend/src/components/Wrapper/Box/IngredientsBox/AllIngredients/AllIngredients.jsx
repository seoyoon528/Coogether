import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { useDispatch, useSelector } from 'react-redux';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Span } from './AllIngredientsStyle';

function AllIngredients({
  category,
  ingredients,
  allIngredient,
  sumbitIngredient,
  favIngredient,
}) {
  const accessToken = useSelector(state => state.user.accessToken);
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');

  const handleClick = i => {
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
  };

  const categoryKorean = dummy.categories
    .filter(name => name.id === category)
    .map(name => {
      return <h4>{name.text} 전체</h4>;
    });

  const ingredient = ingredients.map(i => {
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
                favIngredient(i);
              }}
            >
              <BookmarkAddRoundedIcon />
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

  const AllIngredient = allIngredient.map(e => {
    return (
      <Span>
        <Circle
          key={e}
          onClick={() => {
            handleClick(e);
          }}
        >
          <img src={e.ingredientIcon} alt="icon" />
        </Circle>
        {e.ingredientName}
        {selectIngredientId === e.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(e);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(e);
              }}
            >
              <KitchenRoundedIcon />
            </Button>
          </>
        )}
        {/* </Circle> */}
      </Span>
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
