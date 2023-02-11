import React from 'react';

import { ProfileImageStyle } from './ProfileImageStyle';

function ProfileImage(props) {
  const { image, userNickname } = props;

  return (
    <ProfileImageStyle>
      {image !== '' && <img src={image} alt="프로필 사진" />}
      {!image && (
        <div className="profile__Nickname">
          <h1>{userNickname}</h1>
        </div>
      )}
    </ProfileImageStyle>
  );
}

export default ProfileImage;
