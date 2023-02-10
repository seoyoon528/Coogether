import React from 'react';

// Component
import FollowModalUser from './FollowModalUser';

export default function FollowModalContent(props) {
  const { userList } = props;

  return (
    <main>
      {userList.map(({ followId }) => {
        return <FollowModalUser key={followId} />;
      })}
    </main>
  );
}
