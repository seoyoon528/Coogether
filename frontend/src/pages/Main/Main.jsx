import React from 'react';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';

// 테스트용
import gim from '../../assets/img/김찌.jpg';
import dack from '../../assets/img/찜닭.jpg';

/** 해당 위치에서 api 요청(알고리즘 추천 요리방 0,1,2) 보내면 될 것 같음 */

const DUMMY_ROOM = [
  {
    id: '1',
    king: '내가 요리왕',
    recipe: '찜닭',
    roomName: '메인 찜닭해먹기',
    thumbnail: dack,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: '맛있게 요리해먹기',
    users: 3,
  },
  {
    id: '2',
    king: '내가 진짜 요리왕',
    recipe: '김치찌개',
    roomName: '메인 김치찌개해먹기',
    thumbnail: gim,
    startTime: new Date(),
    targetTime: new Date().getTime() + 10000,
    roomStatus: false,
    anounce: null,
    users: 3,
  },
];

function Main() {
  return (
    <div>
      <h1>배너가 들어갈 위치</h1>
      <br />
      <p>
        [추천요리방 테스트 입니다 알고리즘을 적용한 요리방 리스트로
        변경해야합니다]
      </p>

      <StreamList DUMMY_ROOM={DUMMY_ROOM} />
    </div>
  );
}

export default Main;
