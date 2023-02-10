import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

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

// Style
import { ProfileInformationStyle } from './ProfileInformationStyle';

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
  const [isFollowModalOpened, setIsFollowModalOpened] = useState(false);
  const [clickedContentName, setClickedContentName] = useState('follower');

  const { userInformation, isAuthor, isEditActive, setIsEditActive, dispatch } =
    props;
  // 유저 정보 나누기
  const {
    userNickname,
    userCookCategory,
    userIntroduce,
    userTemp,
    followerList,
    followingList,
    rank,
  } = userInformation;

  // 팔로워 카운트
  const [followerCount, setFollowerCount] = useState(
    followerList.length > 0
      ? followerList.filter(({ followFlag }) => {
          return followFlag === 'CONNECT';
        }).length
      : 0
  );

  // 팔로잉 카운트
  const [followingCount, setFollowingCount] = useState(
    followingList.length > 0
      ? followingList.filter(({ followFlag }) => {
          return followFlag === 'CONNECT';
        }).length
      : 0
  );

  // 더미 유저 시쿼스
  const DUMMY_USER_SEQ = 2;

  // 현재 프로필 페이지 유저
  const { userId } = useParams();
  const accessToken = useSelector(state => state.user.accessToken);

  // 팔로우 상태
  const [isFollowed, setIsFollowed] = useState(
    (() => {
      if (followerCount > 0) {
        return followerList.some(({ followId }) => {
          return followId === DUMMY_USER_SEQ;
        });
      }
      return false;
    })()
  );

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

  const clickFollowHandler = async () => {
    // 팔로잉은 더미 데이터
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/follow/${DUMMY_USER_SEQ}/${userId}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios(requestInfo);
      console.log(response.data);
      if (isFollowed) {
        setIsFollowed(false);
        setFollowerCount(prev => {
          return prev - 1;
        });
      } else {
        setIsFollowed(true);
        setFollowerCount(prev => {
          return prev + 1;
        });
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
              <div className="follow-click-button">
                {!isFollowed && (
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
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/637/637651.png"
                        alt="온도 아이콘"
                      />
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
