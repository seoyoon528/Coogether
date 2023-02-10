import React, { useState } from 'react';

// MUI
import { Grid, Select, MenuItem, styled, InputBase } from '@mui/material';

// Component
import ChefHat from '../../../Rank/ChefHat';
import ProfileEditButton from './ProfileEditButton';

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
  },

  svg: {
    display: 'none',
  },
}));

export default function ProfileInformation(props) {
  const { userInformation, isAuthor, isEditActive, setIsEditActive, dispatch } =
    props;

  const {
    userNickname,
    userCookCategory,
    userIntroduce,
    userTemp,
    followerList,
    followingList,
    rank,
  } = userInformation;

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

  const selectedCookCategory = cookCategories.filter(category => {
    return userCookCategory === category.value;
  })[0].label;

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
                dispatch({ type: 'userNickname', userNickname });
              }}
              readOnly={!isEditActive}
              maxLength="10"
            />
            {/* 수정 버튼 */}
            {isAuthor && (
              <ProfileEditButton
                setIsEditActive={setIsEditActive}
                isEditActive={isEditActive}
                userInformation={userInformation}
                className="form__button"
              />
            )}
          </div>
          {/* 팔로우 */}
          <div className="follow">
            <p>
              팔로워 <span>{followerList.length}</span> | 팔로잉{' '}
              <span>{followingList.length}</span>
            </p>
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
                          type: 'userCookCategory',
                          userCookCategory,
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
                dispatch({ type: 'userIntroduce', userIntroduce });
              }}
              placeholder="상태 메시지를 입력하세요"
            />
          </div>
        </Grid>
      </Grid>
    </ProfileInformationStyle>
  );
}
