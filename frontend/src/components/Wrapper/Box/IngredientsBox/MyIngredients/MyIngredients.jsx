import React, { useState } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import {
  Button,
  Contents,
  Circle,
  FridgeButton,
  Container,
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
        <div>{f.ingredient.ingredientName}</div>
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f.ingredient);
                setVisible(!visible);
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
        <div>{f?.ingredient.ingredientName}</div>
        {selectIngredientId === f?.ingredient.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f.ingredient);
                setVisible(!visible);
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
        <div>{i.ingredient?.ingredientName}</div>
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
          <KitchenIcon style={{ fontSize: '20px' }} />
          <FridgeButton onClick={onClickButton}>냉장고 전체보기</FridgeButton>
          {isOpen && (
            <AllMyIrngredientsModal
              fridge={fridge}
              myFridge={myFridge}
              isopen={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </h4>
        <Container>
          {myFridge.length > 0 ? afterPatch : fridgeIngredient}
        </Container>
      </Contents>
    </div>
  );
}

export default MyIngredients;
