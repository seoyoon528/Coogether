import React from 'react';

// MUI
import { Grid, Stack } from '@mui/material';

// Style
import { CookHistoryStyle } from './CookHistoryStyle';

export default function CookHistory() {
  return (
    <CookHistoryStyle>
      <h4>요리 기록</h4>
      <Grid container columnSpacing={2} columns={12}>
        <Grid item xs={4}>
          <div className="card">
            <div className="card__image">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt="요리 사진"
              />
            </div>
            <Stack spacing={2} sx={{ p: '1.6rem', height: '40%' }}>
              <h4 className="card__title">레시피 제목</h4>
              <div className="card__content">
                <p className="cook">
                  <span>참여 요리사</span>
                </p>
                <p className="date">날짜</p>
              </div>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </CookHistoryStyle>
  );
}
