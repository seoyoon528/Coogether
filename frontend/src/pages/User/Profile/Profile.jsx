import React from 'react';

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
  image:
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
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
  const {
    image,
    nickname,
    follower,
    following,
    temperature,
    like,
    rank,
    message,
    cookHistories,
    recipeHistories,
  } = DUMMY_DATA;
  const userInformation = {
    nickname,
    follower,
    following,
    temperature,
    like,
    rank,
    message,
  };
  const histories = [];
  for (let i = 0; i < 8; i += 1) {
    const data = { ...cookHistories[0] };
    data.id = i;
    histories.push(data);
  }
  const recipes = [];
  for (let i = 0; i < 9; i += 1) {
    const data = { ...recipeHistories[0] };
    data.id = i;
    recipes.push(data);
  }

  return (
    <ProfileStyle>
      <Stack spacing={5} className="profile">
        <UserInfoBox className="user-information">
          <ProfileImage image={image} />
          <ProfileInformation userInformation={userInformation} />
        </UserInfoBox>
        <hr />
        {cookHistories.length > 0 && (
          <UserHistory sectionName="요리 기록" histories={histories} />
        )}
        {recipeHistories.length > 0 && (
          <UserHistory sectionName="등록한 레시피" recipes={recipes} />
        )}
        <UserHistory />
      </Stack>
    </ProfileStyle>
  );
}

export default Profile;
