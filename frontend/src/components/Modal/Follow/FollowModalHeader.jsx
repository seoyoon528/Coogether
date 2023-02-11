import React from 'react';

// Style
import { FollowModalHeaderStyle } from './FollowModalHeaderStyle';

export default function FollowModalHeader(props) {
  const { activeContent, setActiveContent } = props;
  return (
    <FollowModalHeaderStyle>
      <button
        className={activeContent === 'follower' ? 'active' : ''}
        onClick={() => {
          setActiveContent('follower');
        }}
      >
        팔로워
      </button>
      <button
        className={activeContent === 'following' ? 'active' : ''}
        onClick={() => {
          setActiveContent('following');
        }}
      >
        팔로잉
      </button>
    </FollowModalHeaderStyle>
  );
}
