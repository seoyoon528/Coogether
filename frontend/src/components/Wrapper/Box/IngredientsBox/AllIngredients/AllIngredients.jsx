import React, { useState } from 'react';
// import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
// import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Wrapper } from './AllIngredientsStyle';

function AllIngredients({ category }) {
  const categoryList = dummy.ingredients;
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i.name);
    setVisible(!visible);
  };
  const AllIngredient = categoryList.map(e => {
    console.log(e.name);
    return (
      <span>
        <Circle
          key={e.name}
          onClick={() => {
            handleClick(e);
          }}
        >
          {/* {selectIngredientId === e.name && visible && (
            <>
              <Button>즐겨찾기</Button>
              <Button>내 냉장고</Button>
            </>
          )} */}
          {e.name}
          {selectIngredientId === e.name && visible && (
            <Wrapper>
              <Button>즐겨찾기</Button>
              <Button>내 냉장고</Button>
            </Wrapper>
          )}
        </Circle>
      </span>
    );
  });
  const ingredient = categoryList
    .filter(i => i.id === category)
    .map(i => {
      return (
        <span>
          <h4>{i.text} 전체</h4>
          <Circle
            key={i.name}
            onClick={() => {
              handleClick(i);
            }}
          >
            {i.name}
            {selectIngredientId === i.name && visible && (
              <>
                <Button>즐겨찾기</Button>
                <Button>내 냉장고</Button>
              </>
            )}
          </Circle>
        </span>
      );
    });
  // const categoryName = categoryList
  //   .filter(i => i.id === category)
  //   .map(i => {
  //     return <div key={i.id}>{i.text}</div>;
  //   });

  // <h3>{categoryName} 전체</h3>;
  if (category === 'all') {
    return (
      <div>
        <Contents>
          <h4>재료 전체</h4> <div>{AllIngredient}</div>
        </Contents>
      </div>
    );
  }
  return (
    <div>
      <Contents>
        <div>{ingredient}</div>
      </Contents>
    </div>
  );
}

export default AllIngredients;
