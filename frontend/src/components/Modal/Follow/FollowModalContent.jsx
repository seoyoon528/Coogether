import React from 'react';

// Component
import FollowModalUser from './FollowModalUser';

export default function FollowModalContent(props) {
  const DUMMY_USER_SEQ = 1;

  const { userList } = props;

  return (
    <main>
      {userList
        .filter(({ followId }) => {
          return DUMMY_USER_SEQ !== followId;
        })
        .map(({ followId }) => {
          return <FollowModalUser key={followId} />;
        })}
    </main>
  );
}
