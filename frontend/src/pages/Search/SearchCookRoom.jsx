import React, { useState, useEffect } from 'react';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';
import SearchBox from '../../components/Wrapper/Box/SearchBox/SearchBox';

// 테스트용
import gim from '../../assets/img/김찌.jpg';
import dack from '../../assets/img/찜닭.jpg';

/** 해당 위치에서 api 요청(요리방리스트 get) 보내면 될 것 같음 */

const DUMMY_ROOM = [
  {
    id: '1',
    king: '내가 요리왕',
    recipe: '찜닭',
    title: '서치 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
  },
  {
    id: '2',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    title: '서치 김치찌개해먹기',
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
      <h2>참여하고 싶은 요리방을 찾아보세요</h2>
      <h5>다양한 사람들과 함께 요리를 해보고 기록을 남겨보세요</h5>
      <span>wrapper 의 서치박스로 변경중</span>
      {/* 레시피 서치 페이지에도 추가해주기 */}
      <SearchBox onSaveEnteredItem={onSaveEnteredItem} TEXT={TEXT} />
      <br />
      <StreamList DUMMY_ROOM={DUMMY_ROOM} />
    </>
  );
}

export default SearchCookRoom;
