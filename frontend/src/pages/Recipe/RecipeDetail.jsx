import React from 'react';

// MUI
import Grid from '@mui/material/Grid';

// Components
import RecipeIngredients from './detailComponents/RecipeIngredients';
import RecipeOrders from './detailComponents/RecipeOrders';

// Style
import { RecipeDetailStyle } from './RecipeDetailStyle';

const DUMMY_DATA = {
  name: '레시피 이름',
  category: '한식',
  author: '사람',
  contents: [
    '닭고기는 씻어서 우유에 재워 잡내를 제거해준다.',
    '된장 2T, 고추장 1.5T, 다진마늘 1.5T, 맛술 1.5T, 꿀 2T, 고춧가루 1.5T, 참기름 1/2T, 후추 약간을 넣고 쌈장소스를 만든다.',
    '고구마는 스틱형으로 썰고, 양배추는 고구마스틱보다는 조금 큰 사이즈로 썰어서 준비해둔다.',
    '쌈장 소스에 닭고기와 자른 양배추를 넣고 버무린 후 냉장고에서 30분 이상 재워준다.',
    '구멍떡은 열 오른 기름에 약 2분 튀겨 준비한다.',
  ],
  ingredients: [
    { name: '닭고기', amount: '100g' },
    { name: '우유', amount: '200ml' },
    { name: '된장', amount: '1T' },
    { name: '고추장', amount: '1T' },
    { name: '다진마늘', amount: '100g' },
    { name: '맛술', amount: '200ml' },
    { name: '꿀', amount: '100g' },
    { name: '고춧가루', amount: '1T' },
    { name: '참기름', amount: '2T' },
    { name: '후추', amount: '약간' },
  ],
  date: '2020-01-01',
};

function RecipeDetail() {
  const ingredientsNum = DUMMY_DATA.ingredients.length;
  const recipeContentNum = DUMMY_DATA.contents.length;

  return (
    <RecipeDetailStyle>
      <section className="recipe-detail">
        <Grid container columnSpacing={2} rowSpacing={5} columns={12}>
          <Grid item xs={5} className="recipe-detail__information">
            <h2 className="information__name">{DUMMY_DATA.name}</h2>
            <ul className="information__list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                  <li className="information__item">
                    <div className="information__item__category">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png"
                        alt="재료 아이콘"
                      />
                      <p>재료</p>
                    </div>
                    <p>{ingredientsNum}</p>
                  </li>
                </Grid>
                <Grid item xs={4}>
                  <li className="information__item">
                    <div className="information__item__category">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3078/3078984.png"
                        alt="과정 아이콘"
                      />
                      <p>과정</p>
                    </div>
                    <p>{recipeContentNum}</p>
                  </li>
                </Grid>
                <Grid item xs={4}>
                  <li className="information__item">
                    <div className="information__item__category">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2088/2088619.png"
                        alt="출처 아이콘"
                      />
                      <p>출처</p>
                    </div>
                    <p>{DUMMY_DATA.author}</p>
                  </li>
                </Grid>
              </Grid>
            </ul>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={6}>
            <div className="information__image">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="food"
              />
            </div>
          </Grid>
          <Grid item xs={5} className="recipe-detail__information">
            <RecipeIngredients />
            <h2>재료</h2>
            <ul>
              {DUMMY_DATA.ingredients.map((ingredient, idx) => {
                return (
                  <li className="ingredient" key={`ingredients-${idx + 1}`}>
                    <p>{ingredient.name}</p>
                    <p>{ingredient.amount}</p>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={5} className="recipe-detail__information">
            <RecipeOrders />
            <h2>레시피</h2>
            <ul>
              {DUMMY_DATA.contents.map((content, idx) => {
                return (
                  <li key={`contents-${idx + 1}`}>
                    <h4>{idx + 1}</h4>
                    <p>{content}</p>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
      </section>
    </RecipeDetailStyle>
  );
}

export default RecipeDetail;
