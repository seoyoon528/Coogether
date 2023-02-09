import React from 'react';

import NextBtn from '../../Btn/NextBtn/NextBtn';

export default function CookEnterModalFooter(props) {
  const { setIsCookRoomEnterModalOpened } = props;
  return (
    <footer>
      <div className="submit-button">
        <NextBtn name="취소" color="gray" size="medium" />
        <NextBtn name="시작" color="yellow" size="medium" />
      </div>
    </footer>
  );
}
