import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// 라이브러리
import axios from 'axios';
import { Stack } from '@mui/material';

import Banner from '../../components/Banner/Banner';
import StreamSwiper from '../../components/Wrapper/Box/StreamBox/StreamSwiper';
import * as S from './MainStyle';

function Main({ onChangeShow, isShow }) {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [isInFirst, setIsInFirst] = useState(false);
  const [isInSecond, setIsInSecond] = useState(false);
  const [isInThird, setIsInThird] = useState(false);
  const userSeq = useSelector(state => state.user.userSeq);
  const accessToken = useSelector(state => state.user.accessToken);

  const getData = async () => {
    try {
      const secondData = await axios({
        url: 'https://i8b206.p.ssafy.io:9000/api/room/recommend/starttime',
      });
      if (secondData.data.length > 0) {
        setIsInSecond(true);
        setSecond(secondData.data);
      }
      if (userSeq) {
        // 첫번째 데이터
        const firstData = await axios({
          url: `https://i8b206.p.ssafy.io:9000/api/room/recommend/myingredient/${userSeq}`,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (firstData.data.length > 0) {
          setIsInFirst(true);
          setFirst(firstData.data);
        }

        // 세번째 데이터
        const thirdData = await axios({
          url: `https://i8b206.p.ssafy.io:9000/api/room/recommend/usercook/${userSeq}`,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (thirdData.data.length > 0) {
          setIsInThird(true);
          setThird(thirdData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    // nav와 bottom 이 없을 시, 다시 생성함
    if (!isShow) {
      onChangeShow();
    }
  }, [isShow]);

  return (
    <>
      <Banner />
      <S.MainContainer>
        <Stack spacing={5} className="main">
          <br />
          {isInFirst && (
            <div>
              <h2>냉장고를 정리할 수 있는 절호의 기회!</h2>
              <StreamSwiper cookRoom={first} />
            </div>
          )}
          {isInSecond && (
            <div>
              <h2>곧 시작해요! 얼른 들어오세요</h2>
              <StreamSwiper cookRoom={second} />
            </div>
          )}

          {isInThird && (
            <div>
              <h2>이 요리 좋아하지 않나요??</h2>
              <StreamSwiper cookRoom={third} />
            </div>
          )}
        </Stack>
      </S.MainContainer>
    </>
  );
}
export default Main;
