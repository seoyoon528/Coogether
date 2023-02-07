import React from 'react';

// MUI
import { Grid } from '@mui/material';

// Style
import { ProfileInformationStyle } from './ProfileInformationStyle';

export default function ProfileInformation(props) {
  const message = '';

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
  } = props;
  return (
    <ProfileInformationStyle>
      <h2>{userNickname}</h2>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        spacing={{ xs: 2, md: 4, lg: 8 }}
        columns={1}
      >
        <Grid item xs={1}>
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
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/637/637651.png"
                        alt="온도 아이콘"
                      />
                      <p>온도</p>
                    </div>
                    <p>
                      {userTemp >= 1000
                        ? `${Math.floor(userTemp / 1000, -1)}K`
                        : userTemp}{' '}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <div className="icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/9389/9389707.png"
                        alt="선호분야 아이콘"
                      />
                      <p>선호</p>
                    </div>
                    <p>{userCookCategory}</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <div className="icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1021/1021641.png"
                        alt="랭크 아이콘"
                      />
                      <p>랭크</p>
                    </div>
                    <p>{rank}</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <div className={`message ${userIntroduce ? 'userInput' : ''}`}>
            <p>{userIntroduce || '상태 메시지를 입력하세요'}</p>
          </div>
        </Grid>
      </Grid>
    </ProfileInformationStyle>
  );
}
