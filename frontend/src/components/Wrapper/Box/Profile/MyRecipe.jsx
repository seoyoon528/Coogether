import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// MUI
import { Stack } from '@mui/material';

// Style
import { MyRecipeStyle } from './ProfileSwiperStyle';

// Image
import StepCountImage from '../../../../assets/img/list.png';
import IngredientCountImage from '../../../../assets/img/handbag.png';
import CookCategoryImage from '../../../../assets/img/cake-dome.svg';
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

export default function MyRecipe(props) {
  // Props
  const { recipe } = props;

  // useState
  const [ingredientsCount, setIngredientsCount] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);

  // Redux
  const category = useSelector(state => {
    return state.prefer;
  });

  const { recipeImg, recipeName, recipeId, recipeContent, recipeCategory } =
    recipe;

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
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

  // function
  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <MyRecipeStyle>
      <RecipeDetail open={isModalOpened} onClose={closeModal} recipe={recipe} />
      <div
        onClick={() => {
          setIsModalOpened(true);
        }}
        aria-hidden
      >
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
                <p>{category[recipeCategory]}</p>
              </div>
              <div className="content__item">
                <div className="category">
                  <img src={IngredientCountImage} alt="재료 아이콘" />
                  <p>재료</p>
                </div>
                <p>{ingredientsCount}개</p>
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
      </div>
    </MyRecipeStyle>
  );
}
