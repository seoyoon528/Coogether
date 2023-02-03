import React, { useState } from 'react';
import { AppWrap, Button, Contents } from './MyIngredientsStyle';
import AllMyIrngredientsModal from '../../../../Modal/AllMyIngredientsModal/AllMyIngredientsModal';

function MyIngredients() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <Contents>
      <h4>내 냉장고에 있는 재료</h4>
      <AppWrap>
        <Button onClick={onClickButton}>냉장고 전체보기</Button>
        {isOpen && (
          <AllMyIrngredientsModal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AppWrap>
    </Contents>
  );
}

export default MyIngredients;
