import React, { useCallback, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import { Contents } from './MyIngredientsManageStyle';

function MyIngredientsManage() {
  const [category, setCategory] = useState('ALL');
  const onSelect = useCallback(Category => setCategory(Category), []);

  const [enterdItme, setEnterdItme] = useState('');
  const [ingredientName, setIngredientName] = useState([]);
  const [ingredientCategory, setIngredientCategory] = useState([]);

  const TEXT = <p>원하는 재료를 입력해주세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  const getData = async () => {
    try {
      const allIngre = await axios({
        url: `http://i8b206.p.ssafy.io:9000/myIngredient/search/${enterdItme}`,
      });
      console.log(allIngre.data);
      setIngredientName(prev => [
        ...prev,
        ...allIngre.data.map(v => v.ingredientName),
      ]);
      setIngredientCategory(prev => [
        ...prev,
        ...allIngre.data.map(v => v.ingredientCategory),
      ]);
      // console.log(ingredient);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [enterdItme]);

  const components = [
    <FavoriteIngredients
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
    <MyIngredients
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
    <AllIngredients
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
  ];

  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName})

  // useEffect(() => {
  //   console.log(enterdItme);
  // }, [enterdItme]);

  return (
    <>
      <br />
      <br />
      <br />
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />
      <Contents>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box gridColumn="span 2" />
          <Box gridColumn="span 1">
            <IngredientsBox category={category} onSelect={onSelect} />
          </Box>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 5">
            {components.map(component => {
              return component;
            })}
          </Box>
          <Box gridColumn="span 2" />
          {/* <Box gridColumn="span 1" /> */}
        </Box>
      </Contents>
    </>
  );
}

export default MyIngredientsManage;
