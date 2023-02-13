import React, { useState } from 'react';

// MUI
import { Stack } from '@mui/material';

// Component
import FollowModal from '../../../Modal/Follow/FollowModal';
import NextBtn from '../../../Btn/NextBtn/NextBtn';

export default function ProfileUserFollow(props) {
  // Props
  const {
    followerList,
    followingList,
    isAuthor,
    setFollowingCount,
    followerCount,
    followingCount,
    isFollowed,
    clickFollowHandler,
    loginUserSeq,
  } = props;

  // useState
  const [isFollowModalOpened, setIsFollowModalOpened] = useState(false);
  const [clickedContentName, setClickedContentName] = useState('follower'); // 팔로워 선택 or 팔로잉 선택

  return (
    <>
      <FollowModal
        open={isFollowModalOpened}
        onClose={setIsFollowModalOpened}
        followerList={followerList}
        followingList={followingList}
        clickedContentName={clickedContentName}
        isAuthor={isAuthor}
        setFollowingCount={setFollowingCount}
      />
      <div className="follow">
        <Stack spacing={2} direction="row">
          <div
            className="follow-button-box"
            onClick={() => {
              setClickedContentName('follower');
              setIsFollowModalOpened(true);
            }}
            aria-hidden
          >
            <button type="button">팔로워</button>
            <span className="follow-value">{followerCount}</span>
          </div>
          <div
            className="follow-button-box"
            onClick={() => {
              setClickedContentName('following');
              setIsFollowModalOpened(true);
            }}
            aria-hidden
          >
            <button type="button">팔로잉</button>
            <span className="follow-value">{followingCount}</span>
          </div>
          {!isAuthor && loginUserSeq && (
            <div className="follow-click-button">
              {!isFollowed && (
                <NextBtn
                  size="small"
                  onClick={clickFollowHandler}
                  color="yellow"
                  name="팔로우"
                />
              )}
              {isFollowed && (
                <button
                  id="unfollow-button"
                  type="button"
                  onClick={() => {
                    clickFollowHandler();
                  }}
                >
                  팔로우 취소
                </button>
              )}
            </div>
          )}
        </Stack>
      </div>
    </>
  );
}
