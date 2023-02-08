import React, { useState, useEffect } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import axios from 'axios';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { AppWrap, Button, Contents, Circle } from './MyIngredientsStyle';
import AllMyIrngredientsModal from '../../../../Modal/AllMyIngredientsModal/AllMyIngredientsModal';

function MyIngredients({ category }) {
  const [visible, setVisible] = useState(false);
  const [fridge, setFridge] = useState([]);
  const [categoryFridges, setCategoryFridges] = useState([]);
  const [selectIngredientId, setselectIngredientId] = useState('');
  const handleClick = i => {
    setselectIngredientId(i);
    setVisible(!visible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://i8b206.p.ssafy.io:9000/myIngredient/list/total/1'
        );
        setFridge([...response.data.map((v, a) => v.fridgeName)]);
        console.log(fridge);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  const fridgeIngredient = fridge.map(i => {
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
    const getData = async () => {
      try {
        let query = category;
        if (query === 'ALL') {
          query = '';
        }
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/ingredient/list/my/1/${query}`
        );
        setCategoryFridges([
          ...response.data.map((v, a) => v.categoryFridgesName),
        ]);
        console.log(categoryFridges);
      } catch (e) {
        // console.log(e);
      }
    };
    getData();
  }, [category]);

  const categoryFridge = categoryFridges.map(i => {
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

  if (category === 'ALL') {
    return (
      <div>
        <Contents>
          <h4>
            내 냉장고에 있는 재료
            <KitchenRoundedIcon style={{ fontSize: '20px' }} />
          </h4>
          {categoryFridge}
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
      </div>
    );
  }
  return (
    <Contents>
      <h4>
        내 냉장고에 있는 재료
        <KitchenRoundedIcon style={{ fontSize: '20px' }} />
      </h4>
      {fridgeIngredient}
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
