import React, { useState, useEffect } from 'react';

import axios from 'axios';

import StreamSwiper from '../../components/Wrapper/Box/StreamBox/StreamSwiper';

function Main() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  const getData = async () => {
    try {
      const firstData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setFirst(firstData.data.content);

      const secondData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setSecond(secondData.data.content);

      const thirdData = await axios({
        // 추후 수정
        url: 'http://i8b206.p.ssafy.io:9000/room/list?size=5',
      });
      // console.log(firstData);
      setThird(thirdData.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>배너가 들어갈 위치</h1>
      <br />
      <div>
        [1번 카테고리 ]
        <StreamSwiper cookRoom={first} />
      </div>
      <div>
        [2번 카테고리 ]
        <StreamSwiper cookRoom={second} />
      </div>
      <div>
        [3번 카테고리 ]
        <StreamSwiper cookRoom={third} />
      </div>
    </div>
  );
}
export default Main;
