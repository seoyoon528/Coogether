import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Skeleton, Grid } from '@mui/material';

import RecipeBoxList from '../../components/Wrapper/Box/RecipeBox/RecipeBoxList ';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchRecipeStyle';

const LIST_URL = 'http://i8b206.p.ssafy.io:9000/recipe/list';
const SEARCH_URL = 'http://i8b206.p.ssafy.io:9000/recipe/search';

function SearchRecipe() {
  const [enterdItme, setEnterdItme] = useState('');
  const [recepi, setRecepi] = useState([]);

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
  console.log(page);

  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName}
  const getData = useCallback(async () => {
    setLoad(true);
    try {
      const allRecepi = await axios({
        url: `${
          !enterdItme
            ? `${LIST_URL}?page=${page}&size=15`
            : `${SEARCH_URL}/${enterdItme}?page=${page}&size=15`
        }`,
      });
      console.log(allRecepi);
      // console.log(allRecepi.data.content);
      if (page === allRecepi.data.totalPages - 1) {
        endRef.current = true;
      }
      setRecepi(prev => [...new Set([...prev, ...allRecepi.data.content])]);

      preventObserverRef.current = true;
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  }, [page, enterdItme]);
  useEffect(() => {
    getData();
  }, [enterdItme, getData]);

  const SK = Array.from({ length: 15 }, (_, index) => (
    <Skeleton key={index} variant="rectangular" width={255} height={216} />
  ));

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
        <RecipeBoxList recepi={recepi} />
        {load && (
          <Grid container justifyContent="space-evenly">
            {SK}
          </Grid>
        )}
        <li ref={observerRef} />
      </div>
    </S.RecepiContainer>
  );
}

export default SearchRecipe;
