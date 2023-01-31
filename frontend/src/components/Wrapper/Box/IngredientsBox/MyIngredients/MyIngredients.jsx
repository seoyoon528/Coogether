import React, { useState } from 'react';
import styled from 'styled-components';
import AllMyIngredientsModal from '../../../../Modal/AllMyIngredientsModal/AllMyIngredientsModal';

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #febd2f;
  border-radius: 10px;
  color: white;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: right;
  margin: auto;
`;

function MyIngredients() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <span>
      <h3>내 냉장고에 있는 재료</h3>
      <AppWrap>
        <Button onClick={onClickButton}>냉장고 전체보기</Button>
        {isOpen && (
          <AllMyIngredientsModal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AppWrap>
    </span>
  );
}

export default MyIngredients;
