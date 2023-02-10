import React, { useEffect, useState, useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
  // DUMMY_USER
  const DUMMY_USER_ID = 2;

  // 유저ID
  const { userId } = useParams();

  // Page history
  const history = useHistory();

  // 유저 상태 초기화
  const initialState = {
    userImg: '',
    userNickname: '',
    userTemp: 0,
    userCookCategory: '',
    userIntroduce: '',
    followerList: [],
    followingList: [],
    rank: '',
    cookHistories: [],
    recipes: [],
  };
  // 유저 상태 reducer
  const reducer = (state, { type, payload }) => {
    switch (type) {
      // case 'userNickname':
      //   return { ...state, ...payload };
      // case 'userCookCategory':
      //   return { ...state, ...payload };
      // case 'userIntroduce':
      //   return { ...state, ...payload };
      // case 'userImg':
      //   return { ...state, ...payload };
      // case 'follow':
      //   return { ...state, ...payload };
      case 'edit':
        return { ...state, ...payload };

      default:
        return {
          ...payload,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // 로그인 유저와 프로필 유저 일치 여부
  const [isAuthor, setIsAuthor] = useState(DUMMY_USER_ID === +userId);

  // 수정 활성화 여부
  const [isEditActive, setIsEditActive] = useState(false);

  // 프로필 페이지 유저의 정보를 불러오기(userId가 바뀌면 함수 실행)
  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/api/user/${userId}`,
      method: 'GET',
    };
    try {
      const userDataResponse = await axios(requestInfo);
      const userData = await userDataResponse.data;
      // 랭크 확인
      const rank = findRank(userData.userTemp);
      // 히스토리 요청 및 저장
      requestInfo.url = `http://i8b206.p.ssafy.io:9000/api/history/${userId}`;
      const cookHistoryResponse = await axios(requestInfo);
      const cookHistories = await cookHistoryResponse.data;
      // 커스텀 레시피 요청 및 저장
      requestInfo.url = `http://i8b206.p.ssafy.io:9000/api/recipe/list/${userId}`;
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
  }, [userId]);
  console.log(state);
  console.log(state.followerList, state.followingList);

  return (
    <ProfileStyle>
      {/* {Object.keys(userData).length === 0 && <p>로딩 중!!!!!</p>} */}
      {state.rank && (
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
          <UserHistory />
        </Stack>
      )}
    </ProfileStyle>
  );
}

export default Profile;
