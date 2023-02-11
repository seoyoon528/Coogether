import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import { Grid } from '@mui/material';

// Style
import { FollowModalUserStyle } from './FollowModalUserStyle';

export default function FollowModalUser(props) {
  // Props
  const { userSeq, userNickname, userImg, onClose } = props;

  // useHistory
  const history = useHistory();

  // Redux
  const { userSeq: loginUserSeq } = useSelector(state => {
    return state.user;
  });
  const accessToken = useSelector(state => state.user.accessToken);

  // useState
  const [isFollowed, setIsFollowed] = useState(false);

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/user/${userSeq}`, // User Detail Data
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const userResponse = await axios(requestInfo);
      const userResponseData = await userResponse.data;
      if (userResponseData.followerList.length > 0) {
        setIsFollowed(
          userResponseData.followerList.some(
            ({ followerUser: { userSeq: followerUserSeq }, followFlag }) => {
              return (
                loginUserSeq === followerUserSeq && followFlag === 'CONNECT'
              );
            }
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [loginUserSeq, userSeq]);

  return (
    <FollowModalUserStyle>
      <Grid container columnSpacing={3} rowSpacing={3} columns={12}>
        <Grid item xs={3}>
          <div
            className="user-profile-image"
            onClick={() => {
              onClose(false);
              history.push(`/profile/${userSeq}`);
            }}
            aria-hidden
          >
            <img src={userImg} alt={`${userNickname} 프로필 이미지`} />
          </div>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <div className="user-nickname">
            <p
              onClick={() => {
                onClose(false);
                history.push(`/profile/${userSeq}`);
              }}
              aria-hidden
            >
              {userNickname}
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
        >
          {loginUserSeq && userSeq !== loginUserSeq && (
            <div className="follow-action-button">
              {!isFollowed && <button type="button">팔로우</button>}
              {isFollowed && <button type="button">팔로우 취소</button>}
            </div>
          )}
        </Grid>
      </Grid>
    </FollowModalUserStyle>
  );
}
