import React from 'react';

// Style
import { CookHistoryStyle } from './CookHistoryStyle';

// Component
import ProfileSwiper from './ProfileSwiper';

const DUMMY_HISTORIES = [
  {
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    title: '레시피 제목',
    cooks: [
      '참여 요리사1',
      '참여 요리사2',
      '참여 요리사3',
      '참여 요리사4',
      '참여 요리사5',
    ],
    date: '2023-01-01',
  },
];

export default function CookHistory() {
  const histories = [];
  for (let i = 0; i < 8; i += 1) {
    const data = { ...DUMMY_HISTORIES[0] };
    data.id = i;
    histories.push(data);
  }
  return (
    <CookHistoryStyle>
      <h4>요리 기록</h4>
      <ProfileSwiper histories={histories} />
    </CookHistoryStyle>
  );
}
