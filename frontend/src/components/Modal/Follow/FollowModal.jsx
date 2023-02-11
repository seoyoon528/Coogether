import React, { useState } from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import FollowModalContent from './FollowModalContent';
import FollowModalHeader from './FollowModalHeader';

// Style
import { FollowModalStyle } from './FollowModalStyle';

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
      maxWidth="xs"
    >
      <FollowModalStyle>
        <FollowModalHeader
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        {activeContent === 'follower' && (
          <FollowModalContent
            onClose={onClose}
            userList={followerList.filter(({ followId, followFlag }) => {
              return followFlag === 'CONNECT' && followId !== loginUserSeq;
            })}
          />
        )}
        {activeContent === 'following' && (
          <FollowModalContent
            onClose={onClose}
            userList={followingList.filter(({ followId, followFlag }) => {
              return followFlag === 'CONNECT' && followId !== loginUserSeq;
            })}
          />
        )}
      </FollowModalStyle>
    </Dialog>
  );
}
