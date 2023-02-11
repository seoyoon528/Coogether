import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import { Stack, Box } from '@mui/material';

// Component
import RecipeCookName from './RecipeCookName';
import RecipeFoodCategory from './RecipeFoodCategory';
import RecipeCookImage from './RecipeCookImage';
import RecipeIngredients from './RecipeIngredients';
import RecipeOrders from './RecipeOrders';
import NextBtn from '../../Btn/NextBtn/NextBtn';

function RecipeRegisterForm() {
  // useHistory
  const history = useHistory();

  // Redux
  const { userSeq } = useSelector(state => {
    return state.user;
  });
  const accessToken = useSelector(state => state.user.accessToken);

  // useRef, useState
  const cookNameRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState('no-select');
  const [cookImage, setCookImage] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeOrders, setRecipeOrders] = useState([
    { id: 'order-1' },
    { id: 'order-2' },
  ]);

  // function
  // form 제출
  const recipeSubmitHandler = async () => {
    // 전송하는 데이터 가공 및 변수명 변경
    const recipeName = cookNameRef.current.value;
    const recipeCategory = selectedCategory;
    const recipeImg = cookImage;
    const ingredientListRequest = recipeIngredients.map(
      ({ ingredientId, ingredientAmount }) => {
        return { ingredientId, ingredientAmount };
      }
    );
    const recipeStepRequest = recipeOrders.map(({ content }, idx) => {
      return { recipeStepNum: idx + 1, recipeStepContent: content };
    });
    const recipeType = 'CUSTOM';

    // 이미지를 제외한 전송 데이터 객체로 묶기
    const sendingData = {
      recipeName,
      recipeCategory,
      ingredientListRequest,
      recipeStepRequest,
      recipeType,
    };

    // formData에 전송할 데이터 담기
    const formData = new FormData();
    // 객체
    formData.append(
      'recipeRequest',
      new Blob([JSON.stringify(sendingData)], { type: 'application/json' })
    );
    // 파일
    formData.append('file', recipeImg);

    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/recipe/create/${userSeq}`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
      data: formData,
    };

    try {
      const response = await axios(requestInfo);
      console.log(response.data);
      history.replace(`/profile/${userSeq}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="recipe-register__form" onSubmit={recipeSubmitHandler}>
      <Stack spacing={5}>
        <RecipeCookName cookNameRef={cookNameRef} />
        <RecipeFoodCategory
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <RecipeCookImage cookImage={cookImage} onChange={setCookImage} />
        <RecipeIngredients
          recipeIngredients={recipeIngredients}
          setRecipeIngredients={setRecipeIngredients}
        />
        <hr color="#ffcc5e" />
        <RecipeOrders recipeOrders={recipeOrders} onClick={setRecipeOrders} />
        <hr color="#ffcc5e" />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 2" />
          <Box
            gridColumn="span 9"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <NextBtn
              size="medium"
              name="등록"
              onClick={recipeSubmitHandler}
              color="yellow"
            />
          </Box>
        </Box>
      </Stack>
    </form>
  );
}

export default RecipeRegisterForm;
