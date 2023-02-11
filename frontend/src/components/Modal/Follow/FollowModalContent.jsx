import React from 'react';

// Component
import FollowModalUser from './FollowModalUser';

// Style
import { FollowModalContentStyle } from './FollowModalContentStyle';

export default function FollowModalContent(props) {
  // Props
  const { userList, onClose } = props;

  return (
    <FollowModalContentStyle>
      {userList.length > 0 &&
        userList[0].followerUser &&
        userList.map(({ followerUser: { userImg, userNickname, userSeq } }) => {
          return (
            <FollowModalUser
              key={userSeq}
              onClose={onClose}
              userSeq={userSeq}
              userNickname={userNickname}
              userImg={userImg}
            />
          );
        })}
      {userList.length > 0 &&
        userList[0].followingUser &&
        userList.map(
          ({ followingUser: { userImg, userNickname, userSeq } }) => {
            return (
              <FollowModalUser
                key={userSeq}
                onClose={onClose}
                userSeq={userSeq}
                userNickname={userNickname}
                userImg={userImg}
              />
            );
          }
        )}
    </FollowModalContentStyle>
  );
}
