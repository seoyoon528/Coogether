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

const DUMMY_DATA = {
  image: '',
  nickname: '아이유',
  follower: 1000,
  following: 1000,
  temperature: 50,
  like: '한식',
  rank: 'red',
  message: '상태 메시지입니다',
  cookHistories: [
    {
      image:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      title: '레시피 제목',
      cooks: [
        '참여 요리사1',
        '참여 요리사2',
        '참여 요리사3',
        '참여 요리사4',
        '참여 요리사5',
      ],
      date: '2023-01-01',
    },
  ],
  recipeHistories: [
    {
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
      recipeName: '요리 이름',
      information: {
        ingredients: [],
        orders: [],
        date: '',
      },
    },
  ],
};
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
  };
  // 유저 상태 reducer
  const reducer = (
    state,
    {
      type,
      userNickname,
      userCookCategory,
      userIntroduce,
      userImg,
      userTemp,
      followerList,
      followingList,
      rank,
    }
  ) => {
    switch (type) {
      case 'userNickname':
        return { ...state, userNickname };
      case 'userCookCategory':
        return { ...state, userCookCategory };
      case 'userIntroduce':
        return { ...state, userIntroduce };
      case 'userImg':
        return { ...state, userImg };
      default:
        return {
          userNickname,
          userCookCategory,
          userIntroduce,
          userImg,
          userTemp,
          followerList,
          followingList,
          rank,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // 로그인 유저와 프로필 유저 일치 여부
  const [isAuthor, setIsAuthor] = useState(true);

  // 수정 활성화 여부
  const [isEditActive, setIsEditActive] = useState(false);

  // 프로필 페이지 유저의 정보를 불러오기(userId가 바뀌면 함수 실행)
  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/user/${userId}`,
      method: 'GET',
    };
    try {
      const response = await axios(requestInfo);
      const userData = await response.data;
      // 랭크 확인
      const rank = findRank(userData.userTemp);
      // 불러온 정보 저장
      dispatch({ ...userData, rank });
    } catch (error) {
      if (error.response.status === 400) {
        // 일단 alert로 처리함
        alert('없는 유저입니다');
      }
      history.replace('/main');
    }
  }, [userId]);

  // 더미 데이터
  const histories = [];
  for (let i = 0; i < 8; i += 1) {
    const data = { ...DUMMY_DATA.cookHistories[0] };
    data.id = i;
    histories.push(data);
  }
  const recipes = [];
  for (let i = 0; i < 9; i += 1) {
    const data = { ...DUMMY_DATA.recipeHistories[0] };
    data.id = i;
    recipes.push(data);
  }

  return (
    <ProfileStyle>
      {/* {Object.keys(userData).length === 0 && <p>로딩 중!!!!!</p>} */}
      {state.rank && (
        <Stack spacing={5} className="profile">
          <UserInfoBox className="user-information">
            <ProfileImage
              image={DUMMY_DATA.image}
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
          <UserHistory sectionName="요리 기록" histories={histories} />
          {recipes.length > 0 && (
            <UserHistory sectionName="등록한 레시피" recipes={recipes} />
          )}
          <UserHistory />
        </Stack>
      )}
    </ProfileStyle>
  );
}

export default Profile;
