import React from 'react';

import ProfileEditButton from './ProfileEditButton';

export default function ProfileUserNickname(props) {
  // Props
  const {
    userNickname,
    dispatch,
    isAuthor,
    setIsEditActive,
    isEditActive,
    userCookCategory,
    userIntroduce,
  } = props;

  return (
    <div className="form__nickname">
      <input
        // className={`${isEditActive ? 'active' : ''}`}
        type="text"
        value={userNickname}
        onChange={event => {
          const userNickname = event.target.value;
          dispatch({ type: 'edit', payload: { userNickname } });
        }}
        // readOnly={!isEditActive}
        readOnly
        maxLength="10"
      />
      {/* 수정 버튼 */}
      {isAuthor && (
        <ProfileEditButton
          setIsEditActive={setIsEditActive}
          isEditActive={isEditActive}
          editData={{ userNickname, userCookCategory, userIntroduce }}
          className="form__button"
        />
      )}
    </div>
  );
}
