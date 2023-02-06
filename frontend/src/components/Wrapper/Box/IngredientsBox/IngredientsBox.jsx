import React from 'react';
import dummy from './ingredients.json';
import {
  CategoriesBlock,
  Categories,
  Contents,
  H4,
} from './IngredientsBoxStyle';

function IngredientsBox({ onSelect, category }) {
  return (
    <Contents>
      <CategoriesBlock>
        {dummy.categories.map(v => (
          <Categories
            key={v.id}
            active={category === v.id}
            onClick={() => onSelect(v.id)}
            category={category}
          >
            <H4>{v.text}</H4>
          </Categories>
        ))}
      </CategoriesBlock>
    </Contents>
  );
}
// }

export default IngredientsBox;
