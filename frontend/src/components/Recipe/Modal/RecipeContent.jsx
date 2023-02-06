import React from 'react';

// MUI
import { Grid } from '@mui/material';

// Components
import RecipeInformations from './RecipeInformations';
import RecipeIngredients from './RecipeIngredients';
import RecipeOrders from './RecipeOrders';

// Style
import { RecipeContentStyle } from './RecipeContentStyle';

const DUMMY_DATA = {
  name: '레시피 이름',
  category: '한식',
  author: '사람',
  orders: [
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

function RecipeDetailModalContent(props) {
  const { onClose } = props;
  const { name, category, author, orders, ingredients, date } = DUMMY_DATA;
  const orderCount = ingredients.length;
  const contentCount = orders.length;

  return (
    <RecipeContentStyle onClick={onClose}>
      <Grid container columnSpacing={2} rowSpacing={8} columns={12}>
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeInformations
            name={name}
            category={category}
            author={author}
            orderCount={orderCount}
            contentCount={contentCount}
            date={date}
          />
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
        <Grid item xs={12}>
          <hr color="#ffcc5e" />
        </Grid>
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeIngredients ingredients={ingredients} />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5} className="recipe-detail__information">
          <RecipeOrders orders={orders} />
        </Grid>
      </Grid>
    </RecipeContentStyle>
  );
}

export default RecipeDetailModalContent;
