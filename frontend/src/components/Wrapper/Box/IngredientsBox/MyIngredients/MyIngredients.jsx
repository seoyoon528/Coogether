import React, { useState } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import {
  AppWrap,
  Button,
  Contents,
  Circle,
  FridgeButton,
} from './MyIngredientsStyle';
import AllMyIrngredientsModal from '../../../../Modal/AllMyIngredientsModal/AllMyIngredientsModal';

function MyIngredients({
  category,
  fridge,
  categoryFridges,
  sumbitIngredient,
  favIngredient,
  myFridge,
}) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i?.ingredient.ingredientId);
    setVisible(!visible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const afterPatch = myFridge.map(f => {
    return (
      <span>
        <Circle
          key={f}
          onClick={() => {
            handleClick(f);
          }}
        >
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {f.ingredient.ingredientName}
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                console.log(f.ingredient);
                favIngredient(f.ingredient);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                console.log(f.ingredient);
                sumbitIngredient(f.ingredient);
              }}
            >
              <KitchenRoundedIcon />
            </Button>
          </>
        )}
      </span>
    );
  });

  const fridgeIngredient = fridge.map(f => {
    return (
      <span>
        <Circle
          key={f}
          onClick={() => {
            handleClick(f);
          }}
        >
          <img src={f?.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {f?.ingredient.ingredientName}
        {selectIngredientId === f?.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                console.log(f.ingredient);
                favIngredient(f.ingredient);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                console.log(f.ingredient);
                sumbitIngredient(f.ingredient);
              }}
            >
              <KitchenRoundedIcon />
            </Button>
          </>
        )}
      </span>
    );
  });

  const categoryFridge = categoryFridges.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          <img src={i.ingredient?.ingredientIcon} alt="icon" />
        </Circle>
        {i.ingredient?.ingredientName}
        {selectIngredientId === i.ingredient?.ingredientId && visible && (
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

  return (
    <div>
      <Contents>
        <h4>
          내 냉장고에 있는 재료
          <KitchenRoundedIcon style={{ fontSize: '20px' }} />
        </h4>
        <AppWrap>
          <FridgeButton onClick={onClickButton}>냉장고 전체보기</FridgeButton>
          {isOpen && (
            <AllMyIrngredientsModal
              fridge={fridge}
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </AppWrap>
        {myFridge.length > 0 ? afterPatch : fridgeIngredient}
      </Contents>
    </div>
  );
}

export default MyIngredients;
