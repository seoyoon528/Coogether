import React from 'react';
import { StreamContents } from './MakeTimeInputStyle';

function MakeBasicInfo() {
  const time = new Date();
  const YEAR = time.getFullYear();
  const MONTH = time.getMonth();
  const DAY = time.getDay();
  const HOUR = time.getHours();
  const MINUTE = time.getMinutes();
  const T = `${YEAR}-${MONTH}-${DAY}T${HOUR}:${MINUTE}:00`;
  console.log(T);
  return (
    <StreamContents>
      <p>시작 시간</p>
      <input type="time" placeholder="시작 시간을 입력해주세요" />
    </StreamContents>
  );
}

export default MakeBasicInfo;
