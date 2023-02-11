import React from 'react';

import { Stack } from '@mui/material';

// Component
import FollowModalUser from './FollowModalUser';

// Style
import { FollowModalContentStyle } from './FollowModalContentStyle';

export default function FollowModalContent(props) {
  const { userList, onClose } = props;

  return (
    <FollowModalContentStyle>
      {userList.map(({ followId }) => {
        return (
          <FollowModalUser
            key={followId}
            followId={followId}
            onClose={onClose}
          />
        );
      })}
    </FollowModalContentStyle>
  );
}
