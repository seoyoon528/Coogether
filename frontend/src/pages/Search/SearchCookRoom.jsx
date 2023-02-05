import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchCookRoomStyle';

/** 해당 위치에서 api 요청(요리방리스트 get) 보내면 될 것 같음 */

const LIST_URL = 'http://i8b206.p.ssafy.io:9000/room/list';
const SEARCH_URL = 'http://i8b206.p.ssafy.io:9000/room/search';

function SearchCookRoom() {
  const [cookRoom, setCookRoom] = useState([]);
  const [enterdItme, setEnterdItme] = useState('');
  const TEXT = <p>참여하고 싶은 요리방 이름을 입력하세요</p>;

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
  // console.log(page);

  const getData = useCallback(async () => {
    setLoad(true);
    try {
      const allCookRoom = await axios({
        url: `${
          !enterdItme
            ? `${LIST_URL}?page=${page}&size=15`
            : `${SEARCH_URL}/${enterdItme}?page=${page}&size=15`
        }`,
      });
      // console.log(allCookRoom.data.totalPages);
      if (page === allCookRoom.data.totalPages) {
        endRef.current = true;
      }
      if (enterdItme) {
        setCookRoom([]);
        setPage(0);
      }

      // setCookRoom(prev => [...prev, ...allCookRoom.data.content]);
      // setCookRoom(prev => [...new Set([...prev, ...allCookRoom.data.content])]);
      setCookRoom(prev => {
        return [...new Set([...prev, ...allCookRoom.data.content])];
      });
      preventObserverRef.current = true;
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  }, [page, enterdItme]);

  useEffect(() => {
    getData();
  }, [enterdItme, page]);
  // console.log(cookRoom);

  const SK = Array.from({ length: 15 }, (_, index) => (
    <Skeleton key={index} variant="rectangular" width={255} height={216} />
  ));
  // console.log(SK);

  return (
    <>
      <S.SearchMainHeader>참여하고 싶은 요리방을 찾아보세요</S.SearchMainHeader>
      <S.SearchSubHeader>
        다양한 사람들과 함께 요리를 해보고 기록을 남겨보세요
      </S.SearchSubHeader>
      {/* 레시피 서치 페이지에도 추가해주기 */}
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />
      <Grid container justifyContent="space-evenly">
        <StreamList cookRoom={cookRoom} />
        {load && (
          <Grid container justifyContent="space-evenly">
            {SK}
          </Grid>
        )}
      </Grid>
      <li ref={observerRef} />
    </>
  );
}

export default SearchCookRoom;
