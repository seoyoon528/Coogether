import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Skeleton, Grid } from '@mui/material';

import RecipeBoxList from '../../components/Wrapper/Box/RecipeBox/RecipeBoxList ';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchRecipeStyle';
import CarouselBtn from '../../components/Btn/CarouselBtn/CarouselBtn';

// 백종원
const LIST_URL = 'https://i8b206.p.ssafy.io:9000/api/recipe/list/baek';
const SEARCH_URL = 'https://i8b206.p.ssafy.io:9000/api/recipe/search/baek';

// 커스텀
const CUSTOM_LIST_URL = 'https://i8b206.p.ssafy.io:9000/api/recipe/list/custom';
const CUSTOM_SEARCH_URL =
  'https://i8b206.p.ssafy.io:9000/api/recipe/search/custom';

function SearchRecipe() {
  const [enterdItme, setEnterdItme] = useState('');
  const [recepi, setRecepi] = useState([]);
  // 커스텀인지 백종원인지 확인하기 위한 State
  const [isCustom, setIsCustom] = useState(true);
  const TEXT = <p>원하는 레시피를 입력해주세요</p>;

  // 로딩중인지 체크
  const [load, setLoad] = useState(null);
  // 페이지 체크 => useEffect 실행을 위함
  const [page, setPage] = useState(0);
  // 옵저버 엘리먼트
  const observerRef = useRef(true);
  // 옵저버 중복생성 방지
  const preventObserverRef = useRef(true);
  // 마지막 페이지 체크
  const endRef = useRef(false);

  // 옵저버 콜백함수 생성
  // entries(배열) => 감지한 DOM 요소들의 인터섹션 상태 정보가 담긴다
  // entries = IntersectionObserverEntry
  const observerHandler = entries => {
    // console.log(entries);
    const target = entries[0];
    if (
      !endRef.current &&
      target.isIntersecting &&
      preventObserverRef.current
    ) {
      preventObserverRef.current = false;
      setPage(prev => prev + 1);
    }
  };
  // console.log(preventObserverRef.current);
  // console.log(endRef.current);
  // threshold 대상 요소 (observer) 가 지정된 위치에서 0.5 %만 보여도 콜백이 호출됨
  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, {
      threshold: 0.5,
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      // 옵저버 중복을 방지하기 위해서 연결을 끊어줌
      observer.disconnect();
    };
  }, []);

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  const onChangePage = () => {
    setRecepi([]);
    setPage(0);
  };

  const baekChangeHandler = () => {
    setIsCustom(true);
    setRecepi([]);
    setPage(0);
    endRef.current = false;
  };
  const customChangeHandler = () => {
    setIsCustom(false);
    setRecepi([]);
    setPage(0);
    endRef.current = false;
  };
  // console.log(page);

  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName}

  const getData = useCallback(async () => {
    setLoad(true);
    try {
      const allRecepi = await axios({
        url: `${
          isCustom
            ? enterdItme
              ? `${CUSTOM_SEARCH_URL}/${enterdItme}?page=${page}&size=15`
              : `${CUSTOM_LIST_URL}?page=${page}&size=15`
            : enterdItme
            ? `${SEARCH_URL}/${enterdItme}?page=${page}&size=15`
            : `${LIST_URL}?page=${page}&size=15`
        }`,
      });
      console.log(allRecepi);
      if (allRecepi.data.content.length === 0) {
        setLoad(false);
        return;
      }
      if (page === allRecepi.data.totalPages - 1) {
        endRef.current = true;
      }
      setRecepi(prev => [...new Set([...prev, ...allRecepi.data.content])]);

      preventObserverRef.current = true;
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  }, [page, enterdItme, isCustom]);

  useEffect(() => {
    getData();
  }, [enterdItme, getData, isCustom]);

  const SK = Array.from({ length: 15 }, (_, index) => (
    <Grid item xs={6} md={4} lg={3} key={index}>
      <Skeleton variant="rectangular" width={255} height={216} />
    </Grid>
  ));

  const recipeIngredient = target => {
    if (target === 'left') {
      baekChangeHandler();
    } else {
      customChangeHandler();
    }
  };
  return (
    <S.RecepiContainer>
      <div className="main">
        <S.SearchMainHeader>원하는 요리 레시피를 찾아보세요</S.SearchMainHeader>
        <S.SearchSubHeader>
          재료부터 요리 순서까지 레시피를 보고 요리를 따라할 수 있어요
        </S.SearchSubHeader>
        <SearchBox
          onSaveEnteredItem={onSaveEnteredItem}
          TEXT={TEXT}
          onChangePage={onChangePage}
        />
        <br />
        <S.UnderLine />
        <br />
        {/* 레시피 타입 전환 */}
        <S.BtnContainer>
          <CarouselBtn
            left="커스텀"
            right="백종원"
            recipeIngredient={recipeIngredient}
            percent={18}
            index={1}
          />
        </S.BtnContainer>
        {/* <button onClick={baekChangeHandler}>커스텀</button>
        <button onClick={customChangeHandler}>백종원</button> */}
        <RecipeBoxList recepi={recepi} />
        {/* 스켈레톤 */}
        {load && (
          <Grid
            container
            columns={12}
            columnSpacing={5}
            rowGap={3}
            justifyContent="space-between"
          >
            {SK}
          </Grid>
        )}
        <li ref={observerRef} />
      </div>
    </S.RecepiContainer>
  );
}

export default SearchRecipe;
