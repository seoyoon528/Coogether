import React from 'react';

// Component
import RecipeRegisterForm from '../../components/Recipe/Register/RecipeRegisterForm';

// IMAGE
import BackgroundImage from '../../assets/img/frying-pan-with-vegetables.jpg';

// Style
import { RecipeRegisterStyle } from './RecipeRegisterStyle';

function RecipeRegister() {
  return (
    <RecipeRegisterStyle>
      <div className="background-image">
        <img src={BackgroundImage} alt="배경 이미지" />
      </div>
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
