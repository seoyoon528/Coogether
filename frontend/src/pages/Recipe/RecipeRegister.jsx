import React from 'react';

import Grid from '@mui/material/Grid';

import { RecipeRegisterStyle } from './RecipeRegisterStyle';

import RecipeRegisterForm from './components/RecipeRegisterForm';

function RecipeRegister() {
  return (
    <RecipeRegisterStyle>
      <section className="recipe-register">
        <Grid container spacing={2}>
          <Grid item xs={12} className="recipe-register__title">
            <h2>자랑하고 싶은 레시피가 있나요?</h2>
            <p className="center gray-505050">
              여기에 등록해 많은 분들과 함께 나눠주세요
            </p>
          </Grid>
        </Grid>
        <RecipeRegisterForm />
      </section>
    </RecipeRegisterStyle>
  );
}

export default RecipeRegister;
