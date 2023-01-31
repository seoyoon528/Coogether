import React from 'react';

import { ProfileCircleStyle } from './ProfileCircleStyle';

const DUMMY_DATA = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
  name: '아이유',
};

function ProfileCircle(props) {
  const { image, name } = DUMMY_DATA;

  return (
    <ProfileCircleStyle>
      <img src={image} alt={name} />
    </ProfileCircleStyle>
  );
}

export default ProfileCircle;
