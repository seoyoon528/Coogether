import React from 'react';

import { ProfileImageStyle } from './ProfileImageStyle';

function ProfileImage(props) {
  const { image } = props;

  return (
    <ProfileImageStyle>
      <img src={image} alt="프로필 사진" />
    </ProfileImageStyle>
  );
}

export default ProfileImage;
