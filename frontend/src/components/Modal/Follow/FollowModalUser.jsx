import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import { Grid } from '@mui/material';

import axios from 'axios';

// Style
import { FollowModalUserStyle } from './FollowModalUserStyle';

export default function FollowModalUser(props) {
  // Props
  const { followId, onClose } = props;

  // useHistory
  const history = useHistory();

  // Redux
  const { userSeq } = useSelector(state => {
    return state.user;
  });

  // useState
  const [userData, setUserData] = useState({});
  const [isFollowed, setIsFollowed] = useState(false);

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/user/${followId}`, // User Detail Data
      method: 'GET',
    };
    try {
      const userResponse = await axios(requestInfo);
      const userResponseData = await userResponse.data;
      if (userResponseData.followerList.length > 0) {
        setIsFollowed(
          userResponseData.followerList.some(({ followId, followFlag }) => {
            return userSeq === followId && followFlag === 'CONNECT';
          })
        );
      }
      setUserData({
        userNickname: userResponseData.userNickname,
        userImg: userResponseData.userImg,
      });
    } catch (error) {
      console.log(error);
    }
  }, [userSeq, followId]);

  return (
    <FollowModalUserStyle>
      <Grid container columnSpacing={3} columns={12}>
        <Grid item xs={3}>
          <div
            className="user-profile-image"
            onClick={() => {
              onClose(false);
              history.push(`/profile/${followId}`);
            }}
            aria-hidden
          >
            <img
              src={userData.userImg}
              alt={`${userData.userNickname} 프로필 이미지`}
            />
          </div>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <div className="user-nickname">
            <p
              onClick={() => {
                onClose(false);
                history.push(`/profile/${followId}`);
              }}
              aria-hidden
            >
              {userData.userNickname}
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
        >
          {userSeq && (
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
