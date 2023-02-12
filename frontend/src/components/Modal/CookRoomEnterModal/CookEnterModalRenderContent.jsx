import React from 'react';

import { Grid } from '@mui/material';

export default function CookEnterModalRenderContent(props) {
  const { ingredients } = props;

  const buyIngredient = ingredient => {
    window.open(
      `https://front.homeplus.co.kr/express/search?entry=direct&keyword=${ingredient}`,
      '_blank',
      'noopener, noreferrer'
    );
  };

  console.log(ingredients);
  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={2}
      columns={12}
      className="modal__ingredients-contents"
      justifyContent="space-evenly"
    >
      {ingredients.map(
        ({ ingredient: { ingredientId, ingredientName, ingredientIcon } }) => {
          return (
            <Grid item xs={6} key={ingredientId}>
              <div className="ingredient_icon">
                <img src={ingredientIcon} alt="" />
              </div>
              <p>{ingredientName}</p>
              {/* <button
                className="ingredient_button"
                type="button"
                onClick={() => {
                  buyIngredient(ingredientName);
                }}
              >
                {ingredientName}
              </button> */}
            </Grid>
          );
        }
      )}
    </Grid>
  );
}
