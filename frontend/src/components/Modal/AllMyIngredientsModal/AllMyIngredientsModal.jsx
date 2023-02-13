import React, { useState } from 'react';
import './AllMyIngredientsModal.scss';
import { Circle, Container } from './AllMyIngredientsModalStyle';

function AllMyIngredientsModal({ onClose, fridge, myFridge }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleClose = () => {
    onClose?.();
  };

  const fridgeIngredient = fridge.map(i => {
    return (
      <span>
        <Circle key={i}>
          <img src={i?.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {i?.ingredient.ingredientName}
      </span>
    );
  });

  const afterPatch = myFridge.map(f => {
    console.log(f);
    return (
      <span>
        <Circle key={f}>
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        {f.ingredient.ingredientName}
      </span>
    );
  });

  return (
    <button className="Overlay" onClick={handleClose}>
      <div className="wrapper">
        <button className="fridge" onClick={e => e.stopPropagation()}>
          <div className={`door top ${isActive ? 'active' : ''}`} />
          <button
            aria-label="Mute volume"
            className={`door bottom ${isActive ? 'active' : ''}`}
            onClick={handleClick}
          />
          <Container>
            <div className="shelves" />
            {myFridge.length > 0 ? afterPatch : fridgeIngredient}
          </Container>
        </button>
      </div>
    </button>
  );
}

export default AllMyIngredientsModal;
