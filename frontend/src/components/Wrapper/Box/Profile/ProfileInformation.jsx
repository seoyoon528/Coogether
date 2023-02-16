import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import { Grid } from '@mui/material';

// Style
import { ProfileInformationStyle } from './ProfileInformationStyle';
import ProfileUserMessage from './ProfileUserMessage';
import ProfileUserNickname from './ProfileUserNickname';
import ProfileUserFollow from './ProfileUserFollow';
import ProfileUserIconInfo from './ProfileUserIconInfo';

export default function ProfileInformation(props) {
  // Props
  const {
    userInformation,
    isAuthor,
    isEditActive,
    setIsEditActive,
    dispatch,
    loginUserSeq,
    profileUserSeq,
  } = props;
  // 유저 정보 나누기 (userInformation 변수를 사용하기 위해서 다시 나눔)
  const {
    userNickname,
    userCookCategory,
    userIntroduce,
    userTemp,
    followerList,
    followingList,
    rank,
  } = userInformation;

  // Redux
  const accessToken = useSelector(state => state.user.accessToken);
  const {
    userImg: loginUserImg,
    userTemp: loginUserTemp,
    userNickname: loginUserNickname,
  } = useSelector(state => {
    return state.user;
  });

  // useState
  const [isFollowed, setIsFollowed] = useState();
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [isInFollowerList, setIsInFollowerList] = useState(false);

  // useEffect
  useEffect(() => {
    if (followerList.length > 0) {
      let followerCount = 0;
      followerList.forEach(({ followFlag, followerUser: { userSeq } }) => {
        // 팔로워 수 카운트
        if (followFlag === 'CONNECT') {
          followerCount += 1;
          if (userSeq === loginUserSeq) {
            setIsFollowed(true); // 팔로워 여부 저장
          }
        }
        if (userSeq === loginUserSeq) {
          setIsInFollowerList(true); // 팔로워 리스트에 현재 로그인 유저가 있는지 저장
        }
      });
      setFollowerCount(followerCount);
    }
    // following 수 체크
    if (followingList.length > 0) {
      setFollowingCount(
        followingList.filter(({ followFlag }) => {
          return followFlag === 'CONNECT';
        }).length
      );
    }
  }, [followerList, followingList, loginUserSeq, profileUserSeq]);

  // Function
  // 팔로우 함수
  const follow = () => {
    setIsFollowed(true);
    setFollowerCount(prev => {
      return prev + 1;
    });
    const sendingFollowList = [...followerList];
    if (isInFollowerList) {
      sendingFollowList.forEach(({ followerUser: { userSeq } }, idx) => {
        if (userSeq === loginUserSeq) {
          sendingFollowList[idx].followFlag = 'CONNECT';
        }
      });
    } else {
      sendingFollowList.push({
        followFlag: 'CONNECT',
        followerUser: {
          userImg: loginUserImg,
          userNickname: loginUserNickname,
          userTemp: loginUserTemp,
          userSeq: loginUserSeq,
        },
      });
    }
    dispatch({ type: 'edit', followerList: sendingFollowList });
  };
  // 언팔로우 함수
  const unfollow = () => {
    setIsFollowed(false);
    setFollowerCount(prev => {
      return prev - 1;
    });
    const sendingFollowList = [...followerList];
    sendingFollowList.forEach(({ followerUser: { userSeq } }, idx) => {
      if (userSeq === loginUserSeq) {
        sendingFollowList[idx].followFlag = 'DISCONNECT';
      }
    });
    dispatch({ type: 'edit', followerList: sendingFollowList });
  };
  // 팔로우 버튼 클릭
  const clickFollowHandler = async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/follow/${loginUserSeq}/${profileUserSeq}`, // 팔로잉 REST API
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios(requestInfo);
      if (isFollowed) {
        unfollow();
      } else {
        follow();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileInformationStyle>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        rowSpacing={{ xs: 2, lg: 3 }}
        columns={1}
      >
        {/* 닉네임 */}
        <Grid item xs={12}>
          <ProfileUserNickname
            userNickname={userNickname}
            dispatch={dispatch}
            isAuthor={isAuthor}
            setIsEditActive={setIsEditActive}
            isEditActive={isEditActive}
            userCookCategory={userCookCategory}
            userIntroduce={userIntroduce}
          />
          {/* 팔로우 */}
          <ProfileUserFollow
            followerList={followerList}
            followingList={followingList}
            isAuthor={isAuthor}
            setFollowingCount={setFollowingCount}
            followerCount={followerCount}
            followingCount={followingCount}
            isFollowed={isFollowed}
            clickFollowHandler={clickFollowHandler}
            loginUserSeq={loginUserSeq}
          />
        </Grid>
        {/* 랭크, 온도, 선호 분야 */}
        <Grid item xs={12}>
          <ProfileUserIconInfo
            rank={rank}
            userTemp={userTemp}
            isEditActive={isEditActive}
            userCookCategory={userCookCategory}
            dispatch={dispatch}
          />
        </Grid>
        {/* 상태 메시지 */}
        <Grid item xs={12}>
          <ProfileUserMessage
            userIntroduce={userIntroduce}
            dispatch={dispatch}
            isEditActive={isEditActive}
          />
        </Grid>
      </Grid>
    </ProfileInformationStyle>
  );
}
