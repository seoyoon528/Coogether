import React from 'react';
import { StreamContents } from './MakeBasicInfoStyle';

function MakeBasicInfo() {
  return (
    <StreamContents>
      <p>방송 제목</p>
      <input type="text" placeholder="방송 제목을 입력해주세요" />
      <p>시작 시간</p>
      <input type="text" placeholder="시작 시간을 입력해주세요" />
      <p>요리 이름</p>
      <input type="text" placeholder="요리 이름을 입력해주세요" />
    </StreamContents>
  );
}

export default MakeBasicInfo;
