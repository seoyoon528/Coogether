import React, { useState } from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import FollowModalContent from './FollowModalContent';
import FollowModalHeader from './FollowModalHeader';

export default function FollowModal(props) {
  const { open, onClose, followerList, followingList, clickedContentName } =
    props;
  console.log(followingList);
  const [activeContent, setActiveContent] = useState(clickedContentName);
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose(false);
      }}
      fullWidth
      maxWidth="sm"
    >
      <FollowModalHeader
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      {activeContent === 'follower' && (
        <FollowModalContent
          userList={followerList.filter(({ followFlag }) => {
            return followFlag === 'CONNECT';
          })}
        />
      )}
      {activeContent === 'follwing' && (
        <FollowModalContent
          userList={followingList.filter(({ followFlag }) => {
            return followFlag === 'CONNECT';
          })}
        />
      )}
    </Dialog>
  );
}
