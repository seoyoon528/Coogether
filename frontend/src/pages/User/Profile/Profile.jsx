import React, { useEffect, useState } from 'react';
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
function Profile() {
  // 유저ID
  const { userId } = useParams();
  // 유저 상세 정보
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/user/${userId}`,
      method: 'GET',
    };
    try {
      const response = await axios(requestInfo);
      const data = await response.data;
      let rank;
      if (data.userTemp >= 70) {
        rank = 'purple';
      } else if (data.userTemp >= 60) {
        rank = 'navy';
      } else if (data.userTemp >= 50) {
        rank = 'blue';
      } else if (data.userTemp >= 40) {
        rank = 'green';
      } else if (data.userTemp >= 30) {
        rank = 'yellow';
      } else if (data.userTemp >= 20) {
        rank = 'orange';
      } else {
        rank = 'red';
      }
      data.rank = rank;
      setUserData(data);
    } catch (error) {
      if (error.response.status === 400) {
        // 일단 alert로 처리함
        alert('없는 유저입니다');
      }
      history.replace('/main');
    }
  }, [userId]);

  const {
    userImg,
    userNickname,
    userTemp,
    userCookCategory,
    userIntroduce,
    followerList,
    followingList,
    rank,
  } = userData;

  const userInformation = {
    userNickname,
    userTemp,
    userCookCategory,
    rank,
    followerCnt: followerList?.length,
    followingCnt: followingList?.length,
    userIntroduce,
  };
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
      {Object.keys(userData).length === 0 && <p>로딩 중!!!!!</p>}
      {Object.keys(userData).length > 0 && (
        <Stack spacing={5} className="profile">
          <UserInfoBox className="user-information">
            <ProfileImage
              image={DUMMY_DATA.image}
              userNickname={userNickname}
            />
            <ProfileInformation userInformation={userInformation} />
          </UserInfoBox>
          <hr />
          {histories.length > 0 && (
            <UserHistory sectionName="요리 기록" histories={histories} />
          )}
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
