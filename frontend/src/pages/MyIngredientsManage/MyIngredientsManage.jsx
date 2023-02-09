import React, { useCallback, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import { Contents } from './MyIngredientsManageStyle';
import SearchIngredient from '../../components/Wrapper/Box/IngredientsBox/SearchIngredient/SearchIngredient';

function MyIngredientsManage() {
  const [category, setCategory] = useState('ALL');
  const onSelect = useCallback(Category => setCategory(Category), []);
  const [ingredients, setIngredients] = useState([]);
  const [allIngredient, setAllIngredient] = useState([]);
  const [enterdItme, setEnterdItme] = useState('');
  const [ingredientName, setIngredientName] = useState([]);
  const [ingredientCategory, setIngredientCategory] = useState([]);
  const [fridge, setFridge] = useState([]);
  const [categoryFridges, setCategoryFridges] = useState([]);

  const TEXT = <p>원하는 재료를 입력해주세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  // 검색 api
  const getData = async () => {
    try {
      const allIngre = await axios({
        url: `http://i8b206.p.ssafy.io:9000/myIngredient/search/${enterdItme}`,
      });
      console.log(allIngre.data);

      setIngredientName([...allIngre.data.map(v => v.ingredientName)]);
      setIngredientCategory([...allIngre.data.map(v => v.ingredientCategory)]);
      // console.log(ingredient);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(enterdItme);
    if (enterdItme !== '') {
      getData();
    }
  }, [enterdItme]);

  // 재료 전체 카테고리 분류 api
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
        setIngredients([...response.data.map((v, a) => v)]);
        // console.log(ingredients);
      } catch (e) {
        // console.log(e);
      }
    };
    getData();
  }, [category]);

  // 재료 전체 api
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(
          'http://i8b206.p.ssafy.io:9000/ingredient/list/total'
        );
        setAllIngredient([...response.data.map((v, a) => v)]);
        // console.log(allIngredient);
      } catch (e) {
        console.log(e);
      }
    };
    getAllData();
  }, [category]);

  // 유저별 냉장고 재료 api
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

  // 유저별 냉장고 카테고리 재료 api
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
        console.log(e);
      }
    };
    getData();
  }, [category]);

  const components = [
    <FavoriteIngredients
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
    <MyIngredients
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
    <AllIngredients
      ingredients={ingredients}
      allIngredient={allIngredient}
      category={category}
      ingredientName={ingredientName}
      ingredientCategory={ingredientCategory}
    />,
  ];

  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName})
  // useEffect(() => {
  //   console.log(enterdItme);
  // }, [enterdItme]);

  return (
    <>
      <br />
      <br />
      <br />
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />

      <Contents>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 10">
            <SearchIngredient ingredientName={ingredientName} />
          </Box>
          <Box gridColumn="span 1" />
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 3">
            <IngredientsBox category={category} onSelect={onSelect} />
          </Box>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 6">
            {components.map(component => {
              return component;
            })}
          </Box>
          <Box gridColumn="span 1" />
          {/* <Box gridColumn="span 1" /> */}
        </Box>
      </Contents>
    </>
  );
}

export default MyIngredientsManage;
