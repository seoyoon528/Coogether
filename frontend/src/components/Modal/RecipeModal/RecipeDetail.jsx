import React from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import RecipeContent from '../../Recipe/Modal/RecipeContent';

// Styled
import { RecipeDetailStyle } from './RecipeDetailStyle';

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

export default function RecipeDetail(props) {
  const { name, category, author, orders, ingredients, date } = DUMMY_DATA;
  const orderCount = ingredients.length;
  const contentCount = orders.length;
  const {
    open,
    onClose,
    recipe: { recipeName, thumbnail, recipeContent, recipeId },
  } = props;
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <RecipeContent onClose={onClose} />
    </Dialog>
  );
}
