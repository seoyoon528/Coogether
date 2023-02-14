import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import { Grid } from '@mui/material';

// Component
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import FavoriteIngredients from '../../components/Wrapper/Box/IngredientsBox/FavoriteIngredients/FavoriteIngredients';
import MyIngredients from '../../components/Wrapper/Box/IngredientsBox/MyIngredients/MyIngredients';
import AllIngredients from '../../components/Wrapper/Box/IngredientsBox/AllIngredients/AllIngredients';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import SearchIngredient from '../../components/Wrapper/Box/IngredientsBox/SearchIngredient/SearchIngredient';

// Style

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
      if (category !== 'ALL') {
        try {
          const query = category;
          const response = await axios.get(
            // `https://i8b206.p.ssafy.io:9000/api/ingredient/list/my/1/${query}`
            `https://i8b206.p.ssafy.io:9000/api/ingredient/list/my/${isLogin}/${query}`
          );
          setCategoryFridges([...response.data.map((v, a) => v)]);
        } catch (e) {
          console.log(e);
        }
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

  return (
    <section style={{ margin: '4.8rem' }}>
      <header style={{ marginBottom: '3.2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.6rem' }}>
          내 냉장고를 관리하세요
        </h2>
        <p style={{ color: '#505050', marginBottom: '1.6rem' }}>
          재료 아이콘을 클릭해서 쉽게 냉장고를 관리하세요
        </p>
        <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      </header>
      <Grid container spacing={2} columns={12} justifyContent="space-evenly">
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12} justifyContent="center">
            <Grid item xs={12} md={10}>
              <SearchIngredient
                searchIngre={searchIngre}
                favIngredient={favIngredient}
                sumbitIngredient={sumbitIngredient}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} md={3}>
          <IngredientsBox category={category} onSelect={onSelect} />
        </Grid>
        <Grid item xs={8} md={6}>
          <FavoriteIngredients
            category={category}
            favorite={favorite}
            sumbitIngredient={sumbitIngredient}
            favIngredient={favIngredient}
            favIngre={favIngre}
          />
          <MyIngredients
            category={category}
            categoryFridges={categoryFridges}
            fridge={fridge}
            sumbitIngredient={sumbitIngredient}
            favIngredient={favIngredient}
            myFridge={myFridge}
          />
          <AllIngredients
            ingredients={ingredients}
            allIngredient={allIngredient}
            category={category}
            favIngredient={favIngredient}
            sumbitIngredient={sumbitIngredient}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default MyIngredientsManage;
