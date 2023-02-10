import React, { useState, useEffect } from 'react';

import axios from 'axios';

// MUI
import { Grid } from '@mui/material';

// Components
import RecipeInformations from './RecipeInformations';
import RecipeIngredients from './RecipeIngredients';
import RecipeOrders from './RecipeOrders';

// Style
import { RecipeContentStyle } from './RecipeContentStyle';

function RecipeDetailModalContent(props) {
  const {
    onClose,
    recipe: {
      recipeCategory,
      recipeContent,
      recipeId,
      recipeImg,
      recipeName,
      recipeType,
      recipeCreatedDate,
    },
  } = props;

  const [ingredients, setIngredients] = useState([]);
  const recipeOrders = recipeContent.split('\n');

  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
      method: 'GET',
    };
    try {
      const response = await axios(requestInfo);
      const data = await response.data;
      setIngredients(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <RecipeContentStyle onClick={onClose}>
      <Grid container columnSpacing={2} rowSpacing={8} columns={12}>
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeInformations
            name={recipeName}
            category={recipeCategory}
            author={recipeType}
            ingredientCount={ingredients.length}
            contentCount={recipeOrders.length}
            date={recipeCreatedDate}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <div className="information__image">
            <img src={recipeImg} alt="food" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <hr color="#ffcc5e" />
        </Grid>
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeIngredients ingredients={ingredients} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6} className="recipe-detail__information">
          <RecipeOrders orders={recipeOrders} />
        </Grid>
      </Grid>
    </RecipeContentStyle>
  );
}

export default RecipeDetailModalContent;
