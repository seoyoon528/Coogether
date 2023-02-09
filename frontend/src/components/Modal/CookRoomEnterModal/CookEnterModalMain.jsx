import React, { useState } from 'react';

// Component
import CookEnterModalRenderContent from './CookEnterModalRenderContent';

export default function CookEnterModalMain(props) {
  const { recipeName, recipeIngredients, notHavingIngredients } = props;
  const [clickedButton, setClickedButton] = useState('all');

  console.log(clickedButton);

  return (
    <main>
      <div className="modal__cook-name">
        <h4>{recipeName}</h4>
      </div>
      <div className="modal__ingredients-box">
        <div className="change-button-box">
          <button
            className="change-button all"
            onClick={() => {
              setClickedButton('all');
            }}
          >
            전체 재료
          </button>
          <button
            className="change-button no"
            onClick={() => {
              setClickedButton('no');
            }}
          >
            없는 재료
          </button>
        </div>
        {clickedButton === 'all' && (
          <CookEnterModalRenderContent ingredients={recipeIngredients} />
        )}
        {clickedButton === 'no' && (
          <CookEnterModalRenderContent ingredients={notHavingIngredients} />
        )}
      </div>
    </main>
  );
}
