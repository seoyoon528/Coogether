import React from 'react';
import dummy from './ingredients.json';
import { CategoriesBlock, Categories } from './IngredientsBoxStyle';

function IngredientsBox({ onSelect, category }) {
  return (
    <CategoriesBlock>
      {dummy.categories.map(v => (
        <Categories
          key={v.id}
          active={category === v.id}
          onClick={() => onSelect(v.id)}
        >
          {v.text}
        </Categories>
      ))}
    </CategoriesBlock>
  );
}
// }

export default IngredientsBox;
