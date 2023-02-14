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
import NextBtn from '../../Btn/NextBtn/NextBtn';

function RecipeDetailModalContent(props) {
  // Prios
  const {
    onClose,
    recipe: {
      recipeCategory,
      recipeContent,
      recipeId,
      recipeImg,
      recipeName,
      recipeHostNickname,
      recipeHostUserSeq,
    },
  } = props;

  // useState
  const [ingredients, setIngredients] = useState([]);

  const recipeOrders = recipeContent.split('\n').filter(content => {
    return content.trim() !== '';
  });

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
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
    <RecipeContentStyle>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={8}
        columns={12}
        justifyContent="space-between"
      >
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeInformations
            name={recipeName}
            category={recipeCategory}
            ingredientCount={ingredients.length}
            contentCount={
              recipeOrders.filter(content => {
                return content[0] >= '0' && content[0] <= '9';
              }).length
            }
            nickname={recipeHostNickname}
            userSeq={recipeHostUserSeq}
          />
        </Grid>
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
        <Grid item xs={12}>
          <hr color="#ffcc5e" />
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.2rem',
        }}
      >
        <NextBtn size="medium" name="확인" color="yellow" onClick={onClose} />
      </div>
    </RecipeContentStyle>
  );
}

export default RecipeDetailModalContent;
