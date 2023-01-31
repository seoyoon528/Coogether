import React from 'react';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';

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
  return (
    <div>
      <p>요리방 검색 페이지 입니다</p>
      <h2>참여하고 싶은 요리방을 찾아보세요</h2>
      <h5>다양한 사람들과 함께 요리를 해보고 기록을 남겨보세요</h5>
      <span>wrapper 의 서치박스로 변경예졍</span>
      <input type="text" />
      <ul>
        <li>
          <StreamList DUMMY_ROOM={DUMMY_ROOM} />
        </li>
      </ul>
    </div>
  );
}

export default SearchCookRoom;
