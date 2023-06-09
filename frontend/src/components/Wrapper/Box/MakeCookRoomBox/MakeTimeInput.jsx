import React, { useEffect, useState } from 'react';
import { StreamContents, StreamContentsInput } from './MakeTimeInputStyle';

function MakeBasicInfo(props) {
  const { setStreamTime } = props;

  const time = new Date();
  const YEAR = time.getFullYear();
  let MONTH = time.getMonth() + 1;
  if (MONTH < 10) {
    MONTH = `0${MONTH}`;
  }
  let DAY = time.getDate();
  if (DAY < 10) {
    DAY = `0${DAY}`;
  }
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  const timeCheckHandler = e => {
    const t = e.target.value;
    setHour(t.slice(0, 2));
    setMinute(t.slice(3, 5));
  };
  useEffect(() => {
    const T = `${YEAR}-${MONTH}-${DAY}T${hour}:${minute}:00`;
    setStreamTime(T);
  }, [hour, minute]);

  return (
    <>
      <StreamContents>
        <p>시작 시간</p>
        <div>필수</div>
      </StreamContents>
      <StreamContentsInput>
        <input
          type="time"
          placeholder="시작 시간을 입력해주세요"
          onChange={timeCheckHandler}
        />
      </StreamContentsInput>
    </>
  );
}

export default MakeBasicInfo;
