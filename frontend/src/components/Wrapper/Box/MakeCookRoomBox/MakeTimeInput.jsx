import React, { useEffect, useState } from 'react';
import { StreamContents, StreamContentsInput } from './MakeTimeInputStyle';

function MakeBasicInfo(props) {
  const { setStreamTime } = props;

  const [inputTime, setInputTime] = useState('');
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
    console.log(t.slice(0, 2));
    console.log(t.slice(3, 5));
    setHour(t.slice(0, 2));
    setMinute(t.slice(3, 5));
  };
  useEffect(() => {
    const T = `${YEAR}-${MONTH}-${DAY}T${hour}:${minute}:00`;
    console.log(T);
    setStreamTime(T);
  }, [hour, minute]);
  const setTimeHandler = () => {};
  // console.log(hour);
  // console.log(minute);

  // const HOUR = time.getHours();
  // const MINUTE = time.getMinutes();
  // console.log(T);
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
