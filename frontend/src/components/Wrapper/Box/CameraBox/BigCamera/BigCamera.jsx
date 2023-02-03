import React, { useState } from 'react';

import * as S from './BigCameraStyle';

function BigCamera(props) {
  const [isKing, setIsKing] = useState(true);
  const { children } = props;

  const test = () => {
    setIsKing(!isKing);
  };
  return (
    <>
      <p>큰 카메라</p>
      <S.BigCameraContainer isKing={isKing}>
        {/* video 태그로 변경할 것 */}
        <div>{children}</div>
        <p>userName</p>
      </S.BigCameraContainer>
      <button onClick={test}>테스트용 요리대장 전환</button>
    </>
  );
}

export default BigCamera;
