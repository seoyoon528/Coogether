import React from 'react';
import styled, { css } from 'styled-components';
import dummy from './ingredients.json';

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Categories = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active &&
    css`
            font-weight: 600;
            border-bottom: 2px solid #FEBD2F;
            color; #FEBD2F;
            &:hover {
                color: #FEBD2F;
            }
        `}

  & + & {
    margin-left: 1rem;
  }
`;

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

