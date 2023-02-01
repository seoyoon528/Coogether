import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';
import * as S from './SearchCookRoomStyle';

// 테스트용
import gim from '../../assets/img/김찌.jpg';
import dack from '../../assets/img/찜닭.jpg';

/** 해당 위치에서 api 요청(요리방리스트 get) 보내면 될 것 같음 */

const DUMMY_ROOM = [
  {
    roomId: '1',
    king: '내가 요리왕',
    recipe: '찜닭',
    roomName: '서치 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '3',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    roomName: '서치 김치찌개해먹기',
    thumbnail: gim,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '4',
    king: '내가 요리왕',
    recipe: '찜닭',
    roomName: '서치 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '12311',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    roomName: '서치 김치찌개해먹기',
    thumbnail: gim,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '10',
    king: '내가 요리왕',
    recipe: '찜닭',
    roomName: '서치 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '33',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    roomName: '서치 김치찌개해먹기',
    thumbnail: gim,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '42',
    king: '내가 요리왕',
    recipe: '찜닭',
    roomName: '서치 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    roomId: '123',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    roomName: '서치 김치찌개해먹기',
    thumbnail: gim,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
];

function SearchCookRoom() {
  const [enterdItme, setEnterdItme] = useState('');

  const TEXT = <p>참여하고 싶은 요리방 이름을 입력하세요</p>;

  const onSaveEnteredItem = item => {
    setEnterdItme(item);
  };

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
        <StreamList DUMMY_ROOM={DUMMY_ROOM} />
      </Grid>
    </>
  );
}

export default SearchCookRoom;
