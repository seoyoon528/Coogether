import React from 'react';
import { useSelector } from 'react-redux';

// MUI
import { Grid, Select, MenuItem, styled, InputBase } from '@mui/material';

// Component
import ChefHat from '../../../Rank/ChefHat';

// IMAGE
import LikeIcon from '../../../../assets/img/dining.png';
import FireIcon from '../../../../assets/img/fire.png';

// Select input Style
const CategoryInput = styled(InputBase)(() => ({
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

export default function ProfileUserIconInfo(props) {
  // Props
  const { rank, userTemp, isEditActive, userCookCategory, dispatch } = props;

  // Redux
  const category = useSelector(state => {
    return state.prefer;
  });

  return (
    <Grid container columns={12}>
      <Grid item xs={6}>
        <Grid container columns={12} columnSpacing={{ xs: 5 }}>
          <Grid item xs={3} xl={2}>
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
          <Grid item xs={3} xl={2}>
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
          <Grid item xs={3} xl={2}>
            <div className="item">
              <div className="icon">
                <img src={LikeIcon} alt="선호분야 아이콘" />
                <p>선호</p>
              </div>
              <Select
                readOnly={!isEditActive}
                fullWidth
                value={
                  category[userCookCategory] === '베이킹/디저트'
                    ? '디저트'
                    : category[userCookCategory]
                }
                onChange={event => {
                  const userCookCategory = cookCategories.filter(category => {
                    return event.target.value === category.label;
                  })[0].value;
                  dispatch({
                    type: 'edit',
                    payload: { userCookCategory },
                  });
                }}
                id={`profile-cook-category${!isEditActive ? '-inactive' : ''}`}
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
  );
}
