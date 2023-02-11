import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import {
  Grid,
  Select,
  MenuItem,
  styled,
  InputBase,
  Stack,
} from '@mui/material';

// Component
import ChefHat from '../../../Rank/ChefHat';
import ProfileEditButton from './ProfileEditButton';
import FollowModal from '../../../Modal/Follow/FollowModal';

// Image
import LikeIcon from '../../../../assets/img/cake-dome.svg';
import FireIcon from '../../../../assets/img/fire.png';

// Style
import { ProfileInformationStyle } from './ProfileInformationStyle';

// Select input Style
const CategoryInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'white',
    border: '0.5px solid #505050',
    fontSize: '1.8rem',
    marginTop: '1.6rem',
    justifyContent: 'center',
    fontFamily: 'Pretendard Regular',
    padding: 0,
  },
  '& #profile-cook-category': {
    padding: 0,
  },

  '& #profile-cook-category-inactive': {
    border: 'none',
    padding: 0,

    cursor: 'default',
  },

  svg: {
    display: 'none',
  },
}));

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
  const [isFollowModalOpened, setIsFollowModalOpened] = useState(false);
  const [isFollowed, setIsFollowed] = useState();
  const [clickedContentName, setClickedContentName] = useState('follower'); // 팔로워 선택 or 팔로잉 선택
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
  }, [followerList, followingList]);

  // select options
  const cookCategories = [
    { value: 'KOREAN', label: '한식' },
    { value: 'CHINESE', label: '중식' },
    { value: 'WESTERN', label: '양식' },
    { value: 'JAPANESE', label: '일식' },
    { value: 'DESSERT', label: '디저트' },
    { value: 'ASIAN', label: '아시안' },
    { value: 'BUNSIK', label: '분식' },
    { value: 'ETC', label: '기타' },
    { value: 'NONE', label: '없음' },
  ];

  // 선호 분야 변환(한글)
  const selectedCookCategory = cookCategories.filter(category => {
    return userCookCategory === category.value;
  })[0].label;

  // Function
  // 팔로우 함수
  const follow = () => {
    setIsFollowed(true);
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
        followerId: followerList.length + 1,
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
        rowSpacing={{ xs: 2, md: 4, lg: 8 }}
        columns={1}
      >
        {/* 닉네임 */}
        <Grid item xs={1}>
          <div className="form__nickname">
            <input
              className={`${isEditActive ? 'active' : ''}`}
              type="text"
              value={userNickname}
              onChange={event => {
                const userNickname = event.target.value;
                dispatch({ type: 'edit', payload: { userNickname } });
              }}
              readOnly={!isEditActive}
              maxLength="10"
            />
            {/* 수정 버튼 */}
            {isAuthor && (
              <ProfileEditButton
                setIsEditActive={setIsEditActive}
                isEditActive={isEditActive}
                editData={{ userNickname, userCookCategory, userIntroduce }}
                className="form__button"
              />
            )}
          </div>
          {/* 팔로우 */}
          <FollowModal
            open={isFollowModalOpened}
            onClose={setIsFollowModalOpened}
            followerList={followerList}
            followingList={followingList}
            clickedContentName={clickedContentName}
            loginUserSeq={loginUserSeq}
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
              {!isAuthor && (
                <div className="follow-click-button">
                  {!isFollowed && loginUserSeq && (
                    <button
                      type="button"
                      onClick={() => {
                        clickFollowHandler();
                      }}
                    >
                      팔로우
                    </button>
                  )}
                  {isFollowed && (
                    <button
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
        </Grid>
        {/* 랭크, 온도, 선호 분야 */}
        <Grid item xs={1}>
          <Grid container columns={12}>
            <Grid item xs={6}>
              <Grid container columns={12} columnSpacing={1}>
                <Grid item xs={4}>
                  <div className="item">
                    <div className="icon">
                      <ChefHat color={rank} />
                      <p>랭크</p>
                    </div>
                    <div className="user-information-value-box">
                      <p>{rank}</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <div className="icon">
                      <img src={FireIcon} alt="온도 아이콘" />
                      <p>온도</p>
                    </div>
                    <div className="user-information-value-box">
                      <p>
                        {userTemp >= 1000
                          ? `${Math.floor(userTemp / 1000, -1)}K`
                          : userTemp}{' '}
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <div className="icon">
                      <img src={LikeIcon} alt="선호분야 아이콘" />
                      <p>선호</p>
                    </div>
                    <Select
                      readOnly={!isEditActive}
                      fullWidth
                      value={selectedCookCategory}
                      onChange={event => {
                        const userCookCategory = cookCategories.filter(
                          category => {
                            return event.target.value === category.label;
                          }
                        )[0].value;
                        dispatch({
                          type: 'edit',
                          payload: { userCookCategory },
                        });
                      }}
                      id={`profile-cook-category${
                        !isEditActive ? '-inactive' : ''
                      }`}
                      input={<CategoryInput />}
                    >
                      {cookCategories.map(category => {
                        return (
                          <MenuItem
                            key={category.label}
                            value={category.label}
                            sx={{
                              padding: '1.6rem',
                              fontFamily: 'Pretendard Regular',
                              fontSize: '1.6rem',
                              opacity: 1,
                              color: 'black',
                            }}
                          >
                            {category.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <div className="message">
            <input
              className={`message__input ${userIntroduce && 'exist'} ${
                isEditActive && 'active'
              }`}
              type="text"
              readOnly={!isEditActive}
              value={userIntroduce}
              onChange={event => {
                const userIntroduce = event.target.value;
                dispatch({ type: 'edit', payload: { userIntroduce } });
              }}
              placeholder="상태 메시지를 입력하세요"
            />
          </div>
        </Grid>
      </Grid>
    </ProfileInformationStyle>
  );
}
