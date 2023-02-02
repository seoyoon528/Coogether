import React from 'react';
import axios from 'axios';

import StreamList from '../../components/Wrapper/Box/StreamBox/streamList';
import FloatBtn from '../../components/Btn/FloatBtn/FloatBtn';

// 테스트용
import gim from '../../assets/img/김찌.jpg';
import dack from '../../assets/img/찜닭.jpg';

/** 해당 위치에서 api 요청(알고리즘 추천 요리방 0,1,2) 보내면 될 것 같음 */

const DUMMY_ROOM = [
  {
    roomId: '1',
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
    roomId: '2',
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
  const postRepote = async () => {
    try {
      const postUser = await axios({
        method: 'POST',
        url: 'http://i8b206.p.ssafy.io:9000/report/1/2',
        data: { reportCategory: 'HARMFUL', reportContent: 'string' },
      });
      console.log(postUser);
    } catch (error) {
      console.log(error);
    }
  };

  const follow = async () => {
    try {
      const follow = await axios({
        method: 'PATCH',
        url: 'http://i8b206.p.ssafy.io:9000/follow/1/2',
      });
      console.log(follow);
    } catch (error) {
      console.log(error);
    }
  };

  const repoteHandler = () => {
    postRepote();
  };
  const followHandler = () => {
    follow();
  };
  return (
    <div>
      <h1>배너가 들어갈 위치</h1>
      <br />
      <p>
        [추천요리방 테스트 입니다 알고리즘을 적용한 요리방 리스트로
        변경해야합니다]
      </p>
      <button onClick={repoteHandler}>신고 테스트</button>
      <button onClick={followHandler}>팔로우 테스트</button>
      <StreamList DUMMY_ROOM={DUMMY_ROOM} />
      <FloatBtn />
    </div>
  );
}
export default Main;
