import React, { useState, useReducer } from 'react';

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
  const matchedCategory = {
    KOREAN: '한식',
    CHINESE: '중식',
    WESTERN: '양식',
    JAPANESE: '일식',
    DESSERT: '디저트',
    ASIAN: '아시안',
    BUNSIK: '분식',
    ETC: '기타',
    NONE: '없음',
  };

  const [selectedCategory, setSelectedCategory] = useState('');

  const cookCategories = [
    { value: 'korean', label: '한식' },
    { value: 'chinese', label: '중식' },
    { value: 'western', label: '양식' },
    { value: 'japanese', label: '일식' },
    { value: 'dessert', label: '디저트' },
    { value: 'asian', label: '아시안' },
    { value: 'bunsik', label: '분식' },
    { value: 'etc', label: '기타' },
    { value: 'none', label: '없음' },
  ];

  const {
    userInformation: {
      userNickname,
      userTemp,
      userCookCategory,
      rank,
      followerCnt,
      followingCnt,
      userIntroduce,
    },
    userInformation,
    isSameUser,
  } = props;

  const initialState = userInformation;
  function reducer(state, action) {
    switch (action.type) {
      case 'nickname':
        return { count: state.count + 1 };
      case 'cookCategory':
        return { count: state.count - 1 };
      case 'userIntroduce':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <ProfileInformationStyle>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        rowSpacing={{ xs: 2, md: 4, lg: 8 }}
        columns={1}
      >
        <Grid item xs={1}>
          <div className="form__nickname">
            <input
              type="text"
              value={userNickname}
              readOnly={!isInputActive}
              maxLength="10"
            />
            {isSameUser && (
              <ProfileEditButton
                setIsInputActive={setIsInputActive}
                isInputActive={isInputActive}
                className="form__button"
              />
            )}
          </div>
          <div className="follow">
            <p>
              팔로워 <span>{followerCnt}</span> | 팔로잉{' '}
              <span>{followingCnt}</span>
            </p>
          </div>
        </Grid>
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
                      readOnly={!isInputActive}
                      fullWidth
                      value={selectedCategory}
                      onChange={event => {
                        setSelectedCategory(event.target.value);
                      }}
                      id={`profile-cook-category${
                        !isInputActive && '-inactive'
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
                isInputActive && 'active'
              }`}
              type="text"
              readOnly={!isInputActive}
              value={userIntroduce}
              placeholder="상태 메시지를 입력하세요"
            />
          </div>
        </Grid>
      </Grid>
    </ProfileInformationStyle>
  );
}
