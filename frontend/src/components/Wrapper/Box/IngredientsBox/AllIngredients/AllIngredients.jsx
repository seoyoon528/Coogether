import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Wrapper } from './AllIngredientsStyle';

function AllIngredients({ category, ingredientName, ingredientCategory }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [allIngredient, setAllIngredient] = useState([]);
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const query = category;
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/ingredient/list/total/${query}`
        );

        setIngredients([...response.data.map((v, a) => v.ingredientName)]);
        // console.log(ingredients);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
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

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(
          'http://i8b206.p.ssafy.io:9000/ingredient/list/total'
        );
        setAllIngredient([...response.data.map((v, a) => v.ingredientName)]);
        // console.log(ingredients);
      } catch (e) {
        console.log(e);
      }
    };
    getAllData();
  }, [category]);

  const AllIngredient = allIngredient.map(e => {
    return (
      <span>
        <Circle
          key={e}
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
          {e}
          {selectIngredientId === e && visible && (
            <Wrapper>
              <Button>즐겨찾기</Button>
              <Button>내 냉장고</Button>
            </Wrapper>
          )}
        </Circle>
      </span>
    );
  });

  if (category === 'ALL') {
    return (
      <div>
        <Contents>
          <h4>재료 전체</h4>
          {AllIngredient}
        </Contents>
      </div>
    );
  }
  if (ingredientName)
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
