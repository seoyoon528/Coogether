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
  Span,
} from './MyIngredientsStyle';
import AllMyIrngredientsModal from '../../../../Modal/AllMyIngredientsModal/AllMyIngredientsModal';

function MyIngredients({
  isMyIngrePatched,
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
      <Span key={f.ingredient.ingredientId}>
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
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                favIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </Span>
    );
  });

  const fridgeIngredient = fridge.map(f => {
    return (
      <Span key={f.ingredient.ingredientId}>
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
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                favIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(f.ingredient);
                setVisible(!visible);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </Span>
    );
  });

  // const categoryFridge = categoryFridges.map(i => {
  //   console.log(i);
  //   return (
  //     <span>
  //       <Circle
  //         key={i}
  //         onClick={() => {
  //           handleClick(i);
  //         }}
  //       >
  //         <img src={i.ingredient?.ingredientIcon} alt="icon" />
  //       </Circle>
  //       <div>{i.ingredient?.ingredientName}</div>
  //       {selectIngredientId === i.ingredient?.ingredientId && visible && (
  //         <>
  //           <Button
  //             onClick={() => {
  //               favIngredient(i);
  //             }}
  //           >
  //             <BookmarkAddRoundedIcon />
  //           </Button>
  //           <Button
  //             onClick={() => {
  //               sumbitIngredient(i);
  //             }}
  //           >
  //             <KitchenRoundedIcon />
  //           </Button>
  //         </>
  //       )}
  //     </span>
  //   );
  // });

  return (
    <div>
      <Contents>
        <h4
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            zIndex: '1',
            backgroundColor: '#FFF8EA',
            paddingTop: '12px',
          }}
        >
          내 냉장고에 있는 재료
          <KitchenIcon style={{ fontSize: '24px' }} />
          <FridgeButton onClick={onClickButton}>냉장고 전체보기</FridgeButton>
        </h4>
        <Container>
          {isMyIngrePatched ? afterPatch : fridgeIngredient}
        </Container>
      </Contents>
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
    </div>
  );
}

export default MyIngredients;
