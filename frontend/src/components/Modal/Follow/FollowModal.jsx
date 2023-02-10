import React, { useState } from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import FollowModalContent from './FollowModalContent';
import FollowModalHeader from './FollowModalHeader';

export default function FollowModal(props) {
  // Props
  const {
    open,
    onClose,
    followerList,
    followingList,
    clickedContentName,
    loginUserSeq,
  } = props;

  // useState
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
          loginUserSeq={loginUserSeq}
          userList={followerList.filter(({ followId, followFlag }) => {
            return followFlag === 'CONNECT' && followId !== loginUserSeq;
          })}
        />
      )}
      {activeContent === 'following' && (
        <FollowModalContent
          loginUserSeq={loginUserSeq}
          userList={followingList.filter(({ followId, followFlag }) => {
            return followFlag === 'CONNECT' && followId !== loginUserSeq;
          })}
        />
      )}
    </Dialog>
  );
}
