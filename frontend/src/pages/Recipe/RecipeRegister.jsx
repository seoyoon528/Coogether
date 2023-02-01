import React from 'react';

// Component
import RecipeRegisterForm from './components/RecipeRegisterForm';

// Style
import { RecipeRegisterStyle } from './RecipeRegisterStyle';

function RecipeRegister() {
  return (
    <RecipeRegisterStyle>
      <header className="recipe-register__title">
        <h2>자랑하고 싶은 레시피가 있나요?</h2>
        <p className="recipe-register__title__sub">
          여기에 등록해 많은 분들과 함께 나눠주세요
        </p>
      </header>
      <RecipeRegisterForm />
    </RecipeRegisterStyle>
  );
}

export default RecipeRegister;
