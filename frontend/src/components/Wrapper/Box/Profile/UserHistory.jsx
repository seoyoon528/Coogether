import React from 'react';

import { useHistory } from 'react-router-dom';

// Component
import ProfileSwiper from './ProfileSwiper';

// Style
import { UserHistoryStyle, NoHistory } from './UserHistoryStyle';

export default function UserHistory(props) {
  // Props
  const { sectionName, histories, recipes } = props;

  // useHistory
  const history = useHistory();

  return (
    <UserHistoryStyle>
      <h3>{sectionName}</h3>
      {((histories && histories.length > 0) || recipes) && (
        <ProfileSwiper histories={histories} recipes={recipes} />
      )}
      {histories && histories.length === 0 && (
        <NoHistory
          onClick={() => {
            history.push('/main');
          }}
        >
          <p>쿠게더와 함께 요리해요</p>
        </NoHistory>
      )}
    </UserHistoryStyle>
  );
}
