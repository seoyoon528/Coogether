import React, { useCallback, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
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
  const [fridge, setFridge] = useState([]);
  const [categoryFridges, setCategoryFridges] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [searchIngre, setSearchIngre] = useState([]);
  const [favIngre, setFavIngre] = useState([]);
  const [myFridge, setMyFridge] = useState([]);
  const accessToken = useSelector(state => state.user.accessToken);
  const isLogin = useSelector(state => state.user.userSeq);

  const TEXT = <p>원하는 재료를 입력해주세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  // 검색 api
  const getData = async () => {
    try {
      const allIngre = await axios({
        url: `https://i8b206.p.ssafy.io:9000/api/myIngredient/search/${enterdItme}`,
      });
      setSearchIngre([...allIngre.data.map(v => v)]);
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

  // 즐겨찾기 patch
  const favIngredient = i => {
    const inorOutIngredient = async target => {
      const sendIngredient = await axios.patch(
        `http://i8b206.p.ssafy.io:9000/api/myIngredient/create/fav/${isLogin}/${target}`,
        {}
      );
      console.log(sendIngredient.data);
      setFavIngre([...sendIngredient.data.map(v => v)]);
    };
    inorOutIngredient(i.ingredientId);
  };
  console.log(favIngre);

  // 즐겨찾기 api
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/api/myIngredient/list/fav/${isLogin}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const a = [...response.data.map((v, a) => v)];
        setFavorite(a.map(num => num.ingredient));
        console.log(favorite);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  // 내 냉장고 patch
  const sumbitIngredient = i => {
    const inorOutIngredient = async target => {
      const sendIngredient = await axios.patch(
        `http://i8b206.p.ssafy.io:9000/api/myIngredient/update/${isLogin}/${target}`,
        {}
      );
      setMyFridge([...sendIngredient.data.map(v => v)]);
      console.log(sendIngredient);
    };
    inorOutIngredient(i.ingredientId);
  };
  console.log(setMyFridge);

  // 재료 전체 카테고리 분류 api
  useEffect(() => {
    const getData = async () => {
      try {
        let query = category;
        if (query === 'ALL') {
          query = '';
        }
        const response = await axios.get(
          `http://i8b206.p.ssafy.io:9000/api/ingredient/list/total/${query}`
        );
        setIngredients([...response.data.map((v, a) => v)]);
        console.log(ingredients);
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
          'http://i8b206.p.ssafy.io:9000/api/ingredient/list/total'
        );
        setAllIngredient([...response.data.map((v, a) => v)]);
        console.log(allIngredient);
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
          `http://i8b206.p.ssafy.io:9000/api/myIngredient/list/total/${isLogin}`
        );
        setFridge([...response.data.map((v, a) => v)]);
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
          `http://i8b206.p.ssafy.io:9000/api/ingredient/list/my/1/${query}`
        );
        setCategoryFridges([...response.data.map((v, a) => v)]);
        console.log(categoryFridges);
      } catch (e) {
        // console.log(e);
      }
    };
    getData();
  }, [category]);

  const components = [
    <FavoriteIngredients
      category={category}
      favorite={favorite}
      sumbitIngredient={sumbitIngredient}
      favIngredient={favIngredient}
      favIngre={favIngre}
    />,
    <MyIngredients
      category={category}
      categoryFridges={categoryFridges}
      fridge={fridge}
      sumbitIngredient={sumbitIngredient}
      favIngredient={favIngredient}
      myFridge={myFridge}
    />,
    <AllIngredients
      ingredients={ingredients}
      allIngredient={allIngredient}
      category={category}
      favIngredient={favIngredient}
      sumbitIngredient={sumbitIngredient}
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
            <SearchIngredient searchIngre={searchIngre} />
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
