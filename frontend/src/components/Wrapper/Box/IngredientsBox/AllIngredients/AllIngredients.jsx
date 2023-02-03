import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Wrapper } from './AllIngredientsStyle';

function AllIngredients({ category }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const handleClick = i => {
    setselectIngredientId(i.name);
    setVisible(!visible);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category;
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/ingredient/list/total/${query}`
        );

        setIngredients([...response.data.map((v, a) => v.ingredientName)]);
        console.log(ingredients);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]);

  const ingredient = ingredients.map(i => {
    return (
      <span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          {i}
          {selectIngredientId === i && visible && (
            <>
              <Button>즐겨찾기</Button>
              <Button>내 냉장고</Button>
            </>
          )}
        </Circle>
      </span>
    );
  });

  // const AllIngredient = ingredients.map(e => {
  //   console.log(e.name);
  //   return (
  //     <span>
  //       <Circle
  //         key={e.name}
  //         onClick={() => {
  //           handleClick(e);
  //         }}
  //       >
  //         {/* {selectIngredientId === e.name && visible && (
  //             <>
  //               <Button>즐겨찾기</Button>
  //               <Button>내 냉장고</Button>
  //             </>
  //           )} */}
  //         {e.name}
  //         {selectIngredientId === e.name && visible && (
  //           <Wrapper>
  //             <Button>즐겨찾기</Button>
  //             <Button>내 냉장고</Button>
  //           </Wrapper>
  //         )}
  //       </Circle>
  //     </span>
  //   );
  // });

  if (category === 'ALL') {
    return (
      <div>
        <Contents>
          전체{/* <h4>재료 전체</h4> <div>{AllIngredient}</div> */}
        </Contents>
      </div>
    );
  }
  return (
    <div>
      <Contents>
        <h4>{category} 전체</h4>
        {ingredient}
      </Contents>
    </div>
  );
}

export default AllIngredients;
