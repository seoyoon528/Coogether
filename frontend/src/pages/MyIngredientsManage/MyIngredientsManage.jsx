import React, { useCallback, useState } from 'react';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';

function MyIngredientsManage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(Category => setCategory(Category), []);
  return (
    <>
      <IngredientsBox category={category} onSelect={onSelect} />
      <FavoriteIngredients category={category} />
      <MyIngredients category={category} />
      <AllIngredients category={category} />
    </>
  );
}

export default MyIngredientsManage;
