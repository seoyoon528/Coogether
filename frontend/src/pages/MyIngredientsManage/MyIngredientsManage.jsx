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
    if (enterdItme !== '') {
      getData();
    }
  }, [enterdItme]);

  // 즐겨찾기 patch
  const favIngredient = i => {
    const inorOutIngredient = async target => {
      const sendIngredient = await axios.patch(
        // `https://i8b206.p.ssafy.io:9000/api/myIngredient/create/fav/1/${target}`,
        `https://i8b206.p.ssafy.io:9000/api/myIngredient/create/fav/${isLogin}/${target}`,
        {}
      );
      setFavIngre([...sendIngredient.data.map(v => v)]);
    };
    inorOutIngredient(i.ingredientId);
  };

  // 즐겨찾기 api
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          // `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/fav/1`,
          `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/fav/${isLogin}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const a = [...response.data.map((v, a) => v)];
        setFavorite(a.map(num => num.ingredient));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  // 내 냉장고 patch
  const sumbitIngredient = f => {
    const inorOutIngredient = async target => {
      const sendIngredient = await axios.patch(
        // `https://i8b206.p.ssafy.io:9000/api/myIngredient/update/1/${target}`,
        `https://i8b206.p.ssafy.io:9000/api/myIngredient/update/${isLogin}/${target}`,
        {}
      );
      setMyFridge([...sendIngredient.data.map(v => v)]);
    };
    inorOutIngredient(f.ingredientId);
  };

  // 유저별 냉장고 재료 api
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          // `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/total/1`
          `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/total/${isLogin}`
        );
        setFridge([...response.data.map((v, a) => v)]);
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
          // `https://i8b206.p.ssafy.io:9000/api/ingredient/list/my/1/${query}`
          `https://i8b206.p.ssafy.io:9000/api/ingredient/list/my/${isLogin}/${query}`
        );
        setCategoryFridges([...response.data.map((v, a) => v)]);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  // 재료 전체 카테고리 분류 api
  useEffect(() => {
    const getData = async () => {
      try {
        let query = category;
        if (query === 'ALL') {
          query = '';
        }
        const response = await axios.get(
          `https://i8b206.p.ssafy.io:9000/api/ingredient/list/total/${query}`
        );
        setIngredients([...response.data.map((v, a) => v)]);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [category]);

  // 재료 전체 api
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(
          'https://i8b206.p.ssafy.io:9000/api/ingredient/list/total'
        );
        setAllIngredient([...response.data.map((v, a) => v)]);
      } catch (e) {
        console.log(e);
      }
    };
    getAllData();
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

  return (
    <>
      <br />
      <br />
      <br />
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />

      <Contents>
        <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={1}>
          <Box gridColumn="span 2" />
          <Box gridColumn="span 12">
            <SearchIngredient
              searchIngre={searchIngre}
              favIngredient={favIngredient}
              sumbitIngredient={sumbitIngredient}
            />
          </Box>
          <Box gridColumn="span 2" />
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={1}>
          <Box gridColumn="span 2" />
          <Box gridColumn="span 3">
            <IngredientsBox category={category} onSelect={onSelect} />
          </Box>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 8">
            {components.map(component => {
              return component;
            })}
          </Box>
          <Box gridColumn="span 2" />
        </Box>
      </Contents>
    </>
  );
}

export default MyIngredientsManage;
