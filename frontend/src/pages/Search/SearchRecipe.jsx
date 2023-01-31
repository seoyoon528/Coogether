import React from 'react';

import RecipeBox from '../../components/Wrapper/Box/RecipeBox/RecipeBoxList ';

/** 해당 위치에서 api 요청(레시피 get) 보내면 될 것 같음 */
const DUMMY_RECIPE = [
  {
    id: '1',
    name: '찜닭',
  },
  {
    id: '2',
    name: '김치찌개',
  },
];

function SearchRecipe() {
  return (
    <div>
      <p>레시피 검색 페이지 입니다</p>
      <h2>원하는 요리 레시피를 찾아보세요</h2>
      <h5>재료부터 요리 순서까지 레시피를 보고 요리를 따라할 수 있어요</h5>
      <span>wrapper 의 서치박스로 변경예졍</span>
      <input type="text" />
      <RecipeBox DUMMY_RECIPE={DUMMY_RECIPE} />
    </div>
  );
}

export default SearchRecipe;
