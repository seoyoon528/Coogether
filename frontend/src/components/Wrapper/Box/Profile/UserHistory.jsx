import React from 'react';

// Component
import ProfileSwiper from './ProfileSwiper';

// Style
import { UserHistoryStyle } from './UserHistoryStyle';

export default function UserHistory(props) {
  const { sectionName, histories, recipes } = props;

  return (
    <UserHistoryStyle>
      <h4>{sectionName}</h4>
      <ProfileSwiper histories={histories} recipes={recipes} />
    </UserHistoryStyle>
  );
}
