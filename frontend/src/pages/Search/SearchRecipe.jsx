import React, { useState, useEffect } from 'react';

import RecipeBox from '../../components/Wrapper/Box/RecipeBox/RecipeBoxList ';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchRecipeStyle';

// 테스트용
import gim from '../../assets/img/김찌.jpg';
import dack from '../../assets/img/찜닭.jpg';

/** 해당 위치에서 api 요청(레시피 get) 보내면 될 것 같음 */
const DUMMY_RECIPE = [
  {
    id: '1',
    name: '찜닭',
    thumbnail: dack,
  },
  {
    id: '2',
    name: '김치찌개',
    thumbnail: gim,
  },
  {
    id: '3',
    name: '김치찌개',
    thumbnail: gim,
  },
  {
    id: '4',
    name: '찜닭',
    thumbnail: dack,
  },
  {
    id: '5',
    name: '김치찌개',
    thumbnail: gim,
  },
  {
    id: '6',
    name: '김치찌개',
    thumbnail: gim,
  },
];

function SearchRecipe() {
  const [enterdItme, setEnterdItme] = useState('');

  const TEXT = <p>원하는 레시피를 입력해주세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName})

  // useEffect(() => {
  //   console.log(enterdItme);
  // }, [enterdItme]);

  return (
    <div>
      <S.SearchMainHeader>원하는 요리 레시피를 찾아보세요</S.SearchMainHeader>
      <S.SearchSubHeader>
        재료부터 요리 순서까지 레시피를 보고 요리를 따라할 수 있어요
      </S.SearchSubHeader>
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />
      <RecipeBox DUMMY_RECIPE={DUMMY_RECIPE} />
    </div>
  );
}

export default SearchRecipe;
