import React, { useState, useEffect } from 'react';

import axios from 'axios';

// MUI
import { Stack } from '@mui/material';

// Style
import { MyRecipeStyle } from './ProfileSwiperStyle';

// Image
import StepCountImage from '../../../../assets/img/list.png';
import IngredientCountImage from '../../../../assets/img/handbag.png';
import CookCategoryImage from '../../../../assets/img/cake-dome.svg';

const ChnageCategoryToKorean = category => {
  switch (category) {
    case 'KOREAN':
      return '한식';
    case 'JAPANESE':
      return '일식';
    case 'CHINESE':
      return '중식';
    case 'WESTERN':
      return '양식';
    case 'DESSERT':
      return '디저트';
    case 'ASIAN':
      return '아시안';
    case 'BUNSIK':
      return '분식';
    case 'NONE':
      return '없음';
    default:
      return '기타';
  }
};

export default function MyRecipe(props) {
  const {
    recipe: { recipeImg, recipeName, recipeId, recipeContent, recipeCategory },
  } = props;

  const [ingredientsCount, setIngredientsCount] = useState(0);

  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
      method: 'GET',
    };
    try {
      const ingredientsResponse = await axios(requestInfo);
      const ingredientsCount = await ingredientsResponse.data.length;
      setIngredientsCount(ingredientsCount);
    } catch (error) {
      console.log(error);
    }
  }, [recipeId]);

  const recipeSteps = recipeContent.split('\n').length;
  const category = ChnageCategoryToKorean(recipeCategory);

  return (
    <MyRecipeStyle>
      <div className="my-recipe__image">
        <img src={recipeImg} alt="레시피 사진" />
      </div>
      <Stack spacing={3}>
        <div className="my-recipe__text">
          <h4 className="my-recipe__title">{recipeName}</h4>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="content__item">
              <div className="category">
                <img src={CookCategoryImage} alt="재료 아이콘" />
                <p>선호</p>
              </div>
              <p>{category}</p>
            </div>
            <div className="content__item">
              <div className="category">
                <img src={IngredientCountImage} alt="재료 아이콘" />
                <p>재료</p>
              </div>
              <p>{ingredientsCount}</p>
            </div>
            <div className="content__item">
              <div className="category">
                <img src={StepCountImage} alt="단계 아이콘" />
                <p>과정</p>
              </div>
              <p>{recipeSteps}개</p>
            </div>
          </Stack>
        </div>
      </Stack>
    </MyRecipeStyle>
  );
}
