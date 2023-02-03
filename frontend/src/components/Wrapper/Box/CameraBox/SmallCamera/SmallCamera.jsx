import React, { useState } from 'react';

import * as S from './SmallCameraStyle';

function SmallCamera(props) {
  const { children } = props;
  const [isKing, setIsKing] = useState(true);

  const test = () => {
    setIsKing(!isKing);
  };
  return (
    <>
      <p>작은 카메라</p>
      <S.smallCameraContainer isKing={isKing}>
        {/* video 태그로 변경할 것 */}
        <div>{children}</div>
        <p>userName</p>
      </S.smallCameraContainer>
      <button onClick={test}>테스트용 요리대장 전환</button>
    </>
  );
}

export default SmallCamera;
