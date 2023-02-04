import React from 'react';

// MUI
import { Stack } from '@mui/material';

// Component
import UserInfoBox from '../../../components/Wrapper/Box/Profile/UserInfoBox';
import ProfileInformation from '../../../components/Wrapper/Box/Profile/ProfileInformation';
import ProfileImage from '../../../components/Wrapper/Box/Profile/ProfileImage';
import CookHistory from '../../../components/Wrapper/Box/Profile/CookHistory';
import MyRecipe from '../../../components/Wrapper/Box/Profile/MyRecipe';

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
  } = DUMMY_DATA;
  const profileInformation = {
    nickname,
    follower,
    following,
    temperature,
    like,
    rank,
    message,
  };
  return (
    <ProfileStyle>
      <Stack spacing={5} className="profile">
        <UserInfoBox className="user-information">
          <ProfileImage image={image} />
          <ProfileInformation profileInformation={profileInformation} />
        </UserInfoBox>
        <CookHistory />
        <MyRecipe />
      </Stack>
    </ProfileStyle>
  );
}

export default Profile;
