import React, { useState } from 'react';

// MUI
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { Circle, Button } from './AllMyIngredientsModalStyle';

// Style
import './AllMyIngredientsModal.scss';

function AllMyIngredientsModal({
  onClose,
  fridge,
  myFridge,
  onFavFridge,
  onFridge,
}) {
  // useState
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const [isPatched, setIsPatched] = useState(false);

  // function
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const idHandleClick = i => {
    setselectIngredientId(i?.ingredient.ingredientId);
    setVisible(!visible);
  };
  const handleClose = () => {
    onClose?.();
  };

  // Component
  const afterPatch = myFridge.map(f => {
    return (
      <span key={f.ingredient.ingredientId} style={{ textAlign: 'center' }}>
        <Circle
          key={f}
          onClick={() => {
            idHandleClick(f);
          }}
        >
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div style={{ fontSize: '1.6rem' }}>{f.ingredient.ingredientName}</div>
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                onFavFridge(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                onFridge(f.ingredient);
                setVisible(!visible);
                setIsPatched(true);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </span>
    );
  });

  const fridgeIngredient = fridge.map(i => {
    return (
      <span key={i.ingredient.ingredientId} style={{ textAlign: 'center' }}>
        <Circle
          key={i}
          onClick={() => {
            idHandleClick(i);
          }}
        >
          <img src={i?.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div style={{ fontSize: '1.6rem' }}>{i?.ingredient.ingredientName}</div>
        {selectIngredientId === i?.ingredient.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                onFavFridge(i.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                onFridge(i.ingredient);
                setVisible(!visible);
                setIsPatched(true);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </span>
    );
  });

  return (
    <div className="Overlay" onClick={handleClose} aria-hidden>
      <div aria-hidden className="fridge" onClick={e => e.stopPropagation()}>
        <div className={`door top ${isActive ? 'active' : ''}`} />
        <button
          aria-label="Mute volume"
          className={`door bottom ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        />
        <div className="container">
          <div className="shelves" />
          {isPatched ? afterPatch : fridgeIngredient}
        </div>
      </div>
    </div>
  );
}

export default AllMyIngredientsModal;
