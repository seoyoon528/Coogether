import React, { useState } from 'react';

import { ProfileImageStyle } from './ProfileImageStyle';

function ProfileImage(props) {
  // Props
  const { image, userNickname } = props;

  // useState
  const [isImageError, setIsImageError] = useState(false);

  return (
    <ProfileImageStyle>
      {!isImageError && (
        <img
          src={image}
          alt="프로필 사진"
          onError={() => {
            setIsImageError(true);
          }}
        />
      )}
      {isImageError && (
        <div className="profile__Nickname">
          <h1>{userNickname}</h1>
        </div>
      )}
    </ProfileImageStyle>
  );
}

export default ProfileImage;
