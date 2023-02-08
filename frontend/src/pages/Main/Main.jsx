import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// 라이브러리
import axios from 'axios';
import { Stack } from '@mui/material';

import Banner from '../../components/Banner/Banner';
import StreamSwiper from '../../components/Wrapper/Box/StreamBox/StreamSwiper';
import * as S from './MainStyle';

function Main() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [isIn, setIsIn] = useState(false);

  const user = useSelector(state => state.user.userId);

  const getData = async () => {
    try {
      const refrigeratorDAta = await axios({
        // 유저 id 추가해야 함
        url: 'http://i8b206.p.ssafy.io:9000/myIngredient/list/total/1',
        // url: `http://i8b206.p.ssafy.io:9000/myIngredient/list/total/${user}`,
      });
      if (refrigeratorDAta.data.length > 0) {
        setIsIn(true);
      }

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
    <>
      <Banner />
      <S.MainContainer>
        <Stack spacing={5} className="main">
          <br />
          {isIn && (
            <div>
              <h2>냉장고를 정리할 수 있는 절호의 기회!</h2>
              <StreamSwiper cookRoom={first} />
            </div>
          )}
          <div>
            <h2>곧 시작해요! 얼른 들어오세요</h2>
            <StreamSwiper cookRoom={second} />
          </div>
          <div>
            <h2>이 요리 좋아하지 않나요??</h2>
            <StreamSwiper cookRoom={third} />
          </div>
        </Stack>
      </S.MainContainer>
    </>
  );
}
export default Main;
