import React, { useEffect, useState, useReducer } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import { Stack } from '@mui/material';

// Component
import UserInfoBox from '../../../components/Wrapper/Box/Profile/UserInfoBox';
import ProfileInformation from '../../../components/Wrapper/Box/Profile/ProfileInformation';
import ProfileImage from '../../../components/Wrapper/Box/Profile/ProfileImage';
import UserHistory from '../../../components/Wrapper/Box/Profile/UserHistory';

// Style
import { ProfileStyle } from './ProfileStyle';

// 온도 랭크 변환 함수
const findRank = temp => {
  let rank;
  if (temp >= 60) {
    rank = '보라';
  } else if (temp >= 50) {
    rank = '남색';
  } else if (temp >= 40) {
    rank = '파랑';
  } else if (temp >= 30) {
    rank = '초록';
  } else if (temp >= 20) {
    rank = '노랑';
  } else if (temp >= 10) {
    rank = '주황';
  } else {
    rank = '빨강';
  }

  return rank;
};

function Profile() {
  // 페이지 상단으로 스크롤 이동
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useReducer
  const initialState = {
    userImg: '',
    userNickname: '',
    userTemp: null,
    userCookCategory: '',
    userIntroduce: '',
    followerList: [],
    followingList: [],
    rank: '',
    cookHistories: [],
    recipes: [],
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'edit':
        return { ...state, ...payload };
      default:
        return {
          ...payload,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Redux
  const { userSeq: loginUserSeq } = useSelector(state => {
    return state.user;
  });
  const accessToken = useSelector(state => state.user.accessToken);

  // useParams
  const { userId: profileUserSeq } = useParams();

  // useHistory
  const history = useHistory();

  // useState
  const [isAuthor, setIsAuthor] = useState(loginUserSeq === +profileUserSeq); // 로그인 유저와 프로필 유저 일치 여부
  const [isEditActive, setIsEditActive] = useState(false); // 수정 기능 활성화 여부

  // useEffect
  // 프로필 페이지 유저의 정보를 불러오기(userId가 바뀌면 함수 실행)
  useEffect(async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/user/${profileUserSeq}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const userDataResponse = await axios(requestInfo);
      const userData = await userDataResponse.data;
      // 랭크 확인
      const rank = findRank(userData.userTemp);
      // 히스토리 요청 및 저장
      requestInfo.url = `https://i8b206.p.ssafy.io:9000/api/history/${profileUserSeq}`;
      const cookHistoryResponse = await axios(requestInfo);
      const cookHistories = await cookHistoryResponse.data;
      // 커스텀 레시피 요청 및 저장
      requestInfo.url = `https://i8b206.p.ssafy.io:9000/api/recipe/list/${profileUserSeq}`;
      const recipeResponse = await axios(requestInfo);
      const recipes = await recipeResponse.data;
      // 불러온 정보 저장
      const payload = { ...userData, rank, cookHistories, recipes };
      dispatch({ payload });
    } catch (error) {
      if (error.response.status === 400) {
        // 일단 alert로 처리함
        alert('없는 유저입니다');
      }
      history.replace('/main');
    }
  }, [profileUserSeq]);

  useEffect(() => {
    if (loginUserSeq === +profileUserSeq) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [loginUserSeq, profileUserSeq]);

  return (
    <ProfileStyle>
      {/* {Object.keys(userData).length === 0 && <p>로딩 중!!!!!</p>} */}
      {state.userTemp !== null && (
        <Stack spacing={5} className="profile">
          <UserInfoBox className="user-information">
            <ProfileImage
              image={state.userImg}
              userNickname={state.userNickname}
              isAuthor={isAuthor}
              dispatch={dispatch}
              isEditActive={isEditActive}
              setIsEditActive={setIsEditActive}
            />
            <ProfileInformation
              loginUserSeq={loginUserSeq}
              profileUserSeq={profileUserSeq}
              userInformation={state}
              isAuthor={isAuthor}
              dispatch={dispatch}
              isEditActive={isEditActive}
              setIsEditActive={setIsEditActive}
            />
          </UserInfoBox>
          <hr />
          <UserHistory
            sectionName="요리 기록"
            histories={state.cookHistories}
          />
          {state.recipes.length > 0 && (
            <UserHistory sectionName="등록한 레시피" recipes={state.recipes} />
          )}
        </Stack>
      )}
    </ProfileStyle>
  );
}

export default Profile;
