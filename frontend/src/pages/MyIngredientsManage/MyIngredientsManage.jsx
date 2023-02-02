import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';

function MyIngredientsManage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(Category => setCategory(Category), []);
  const components = [
    <FavoriteIngredients category={category} />,
    <MyIngredients category={category} />,
    <AllIngredients category={category} />,
  ];
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 4fr)" gap={1}>
      <Box gridColumn="span 2">
        <IngredientsBox category={category} onSelect={onSelect} />
      </Box>
      <Box gridColumn="span 10">
        {components.map(component => {
          return component;
        })}
      </Box>
    </Box>
  );
}

export default MyIngredientsManage;
