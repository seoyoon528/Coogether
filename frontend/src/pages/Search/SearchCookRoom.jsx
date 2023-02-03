import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchCookRoomStyle';

/** 해당 위치에서 api 요청(요리방리스트 get) 보내면 될 것 같음 */

function SearchCookRoom() {
  const [cookRoom, setCookRoom] = useState([]);
  const [enterdItme, setEnterdItme] = useState('');

  const TEXT = <p>참여하고 싶은 요리방 이름을 입력하세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

  const getData = async () => {
    try {
      const allCookRoom = await axios({
        url: `${
          !enterdItme
            ? 'http://i8b206.p.ssafy.io:9000/room/list'
            : `http://i8b206.p.ssafy.io:9000/room/search/${enterdItme}`
        }`,
      });
      console.log(allCookRoom.data);
      if (enterdItme) {
        setCookRoom([]);
      }
      setCookRoom(prev => [...prev, ...allCookRoom.data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [enterdItme]);
  // 레시피 서치 페이지에도 추가해주기
  // HTTP 요청 보내야 함
  // 비동기 요청 보내기
  // enterdItme 이 비어있으면 전체 (/room/list)
  // enterdItme 값이 있으면 검색어 기반 (/room/search/{recipeName})

  // useEffect(() => {
  //   console.log(enterdItme);
  // }, [enterdItme]);

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
      </Grid>
    </>
  );
}

export default SearchCookRoom;
