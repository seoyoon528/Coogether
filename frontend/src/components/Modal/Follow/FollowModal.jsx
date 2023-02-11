import React, { useEffect, useState } from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import FollowModalContent from './FollowModalContent';
import FollowModalHeader from './FollowModalHeader';

// Style
import { FollowModalStyle } from './FollowModalStyle';

export default function FollowModal(props) {
  // Props
  const { open, onClose, followerList, followingList, clickedContentName } =
    props;

  // useState
  const [activeContent, setActiveContent] = useState(clickedContentName);

  useEffect(() => {
    setActiveContent(clickedContentName);
  }, [clickedContentName]);

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
            userList={followerList.filter(({ followFlag }) => {
              return followFlag === 'CONNECT';
            })}
          />
        )}
        {activeContent === 'following' && (
          <FollowModalContent
            onClose={onClose}
            userList={followingList.filter(({ followFlag }) => {
              return followFlag === 'CONNECT';
            })}
          />
        )}
      </FollowModalStyle>
    </Dialog>
  );
}
