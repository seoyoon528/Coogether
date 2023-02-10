import React, { useState, useEffect } from 'react';
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
}) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const fridgeIngredient = fridge.map(i => {
    return (
      <span>
        <Circle
          key={i?.ingredient.ingredientId}
          onClick={() => {
            handleClick(i);
          }}
        >
          {i?.ingredient.ingredientName}
          {selectIngredientId === i && visible && (
            <>
              <Button
                onClick={() => {
                  sumbitIngredient(i);
                }}
              >
                <BookmarkAddRoundedIcon />
              </Button>
              <Button
                onClick={() => {
                  favIngredient(i);
                }}
              >
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
        </Circle>
      </span>
    );
  });

  const categoryFridge = categoryFridges.map(i => {
    return (
      <span>
        <Circle
          key={i.ingredientId}
          onClick={() => {
            handleClick(i.ingredientId);
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
          {i.ingredientName}
        </Circle>
      </span>
    );
  });

  if (category === 'ALL') {
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
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </AppWrap>
          {fridgeIngredient}
        </Contents>
      </div>
    );
  }
  return (
    <Contents>
      <h4>
        내 냉장고에 있는 재료
        <KitchenRoundedIcon style={{ fontSize: '20px' }} />
      </h4>
      {categoryFridge}
      <AppWrap>
        <Button onClick={onClickButton}>냉장고 전체보기</Button>
        {isOpen && (
          <AllMyIrngredientsModal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AppWrap>
    </Contents>
  );
}

export default MyIngredients;
