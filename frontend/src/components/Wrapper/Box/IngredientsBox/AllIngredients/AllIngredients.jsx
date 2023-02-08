import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import dummy from '../ingredients.json';
import { Contents, Circle, Button, Wrapper } from './AllIngredientsStyle';

function AllIngredients({ category }) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [allIngredient, setAllIngredient] = useState([]);
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };
  const categoryKorean = dummy.categories
    .filter(name => name.id === category)
    .map(name => {
      return <h4>{name.text} 전체</h4>;
    });

  useEffect(() => {
    const getData = async () => {
      try {
        let query = category;
        if (query === 'ALL') {
          query = '';
        }
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/ingredient/list/total/${query}`
        );
        setIngredients([...response.data.map((v, a) => v.ingredientName)]);
        // console.log(ingredients);
      } catch (e) {
        // console.log(e);
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
          {selectIngredientId === i && visible && (
            <>
              <Button>
                <BookmarkAddRoundedIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
          {i}
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
          {selectIngredientId === e && visible && (
            <>
              <Button>
                <BookmarkAddRoundedIcon />
              </Button>
              <Button>
                <KitchenRoundedIcon />
              </Button>
            </>
          )}
          {e}
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
  return (
    <div>
      <Contents>
        {categoryKorean}
        {ingredient}
        {/* {ingredientName.length === 0
          ? ingredient
          : ingredientName
              .filter(
                (element, index) => category === ingredientCategory[index]
              )
              .map((element, index) => {
                return <div key={element}>{element}</div>;
              })} */}
      </Contents>
    </div>
  );
}

export default AllIngredients;
