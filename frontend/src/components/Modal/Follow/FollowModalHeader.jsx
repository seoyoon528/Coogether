import React from 'react';

export default function FollowModalHeader(props) {
  const { activeContent, setActiveContent } = props;
  return (
    <header>
      <button className={activeContent === 'follower' ? 'active' : ''}>
        팔로워
      </button>
      <button className={activeContent === 'following' ? 'active' : ''}>
        팔로잉
      </button>
    </header>
  );
}
