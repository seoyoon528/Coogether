import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import { Contents } from './MyIngredientsManageStyle';

function MyIngredientsManage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(Category => setCategory(Category), []);
  const components = [
    <FavoriteIngredients category={category} />,
    <MyIngredients category={category} />,
    <AllIngredients category={category} />,
  ];
  const [enterdItme, setEnterdItme] = useState('');

  const TEXT = <p>찾으시는 재료를 입력하세요.</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  // 레시피 서치 페이지에도 추가해주기
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
          <Box gridColumn="span 6">
            {components.map(component => {
              return component;
            })}
          </Box>
          <Box gridColumn="span 1" />
          {/* <Box gridColumn="span 1" /> */}
        </Box>
      </Contents>
    </>
  );
}

export default MyIngredientsManage;
