import React, { useState } from 'react';
import dummy from '../ingredients.json';

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
        <button
          key={e.name}
          onClick={() => {
            handleClick(e);
          }}
        >
          {e.name}
          {selectIngredientId === e.name && visible && (
            <div>
              <button>즐겨찾기</button>
              <button>내 냉장고로</button>
            </div>
          )}
        </button>
      </span>
    );
  });
  const ingredient = categoryList
    .filter(i => i.id === category)
    .map(i => {
      return (
        <span>
          <div>{i.text} 전체</div>
          <button
            key={i.name}
            onClick={() => {
              handleClick(i);
            }}
          >
            {i.name}
            {selectIngredientId === i.name && visible && (
              <div>
                <button>즐겨찾기</button>
                <button>내 냉장고로</button>
              </div>
            )}
          </button>
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
      <span>
        재료 전체 <div>{AllIngredient}</div>
      </span>
    );
  }
  return (
    <span>
      <div>{ingredient}</div>
    </span>
  );
}

export default AllIngredients;
