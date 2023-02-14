import React, { useState } from 'react';

// MUI
import { Circle } from './AllMyIngredientsModalStyle';

// Style
import './AllMyIngredientsModal.scss';

function AllMyIngredientsModal({ onClose, fridge, myFridge }) {
  // useState
  const [isActive, setIsActive] = useState(false);

  // function
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleClose = () => {
    onClose?.();
  };

  // Component
  const fridgeIngredient = fridge.map(i => {
    return (
      <span key={i.myIngredientManageId} style={{ textAlign: 'center' }}>
        <Circle key={i}>
          <img src={i?.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div>{i?.ingredient.ingredientName}</div>
      </span>
    );
  });

  const afterPatch = myFridge.map(f => {
    return (
      <span key={f.myIngredientManageId} style={{ textAlign: 'center' }}>
        <Circle key={f}>
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div>{f.ingredient.ingredientName}</div>
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
          {myFridge.length > 0 ? afterPatch : fridgeIngredient}
        </div>
      </div>
    </div>
  );
}

export default AllMyIngredientsModal;
