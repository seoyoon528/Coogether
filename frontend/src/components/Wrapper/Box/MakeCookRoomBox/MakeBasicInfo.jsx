import React, { useRef } from 'react';
import { StreamContents } from './MakeBasicInfoStyle';

function MakeBasicInfo(props) {
  const { setStreamName } = props;

  const inputRef = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();

    const inputItem = inputRef.current.value;
    if (inputItem.trim().length === 0) {
      return;
    }
    setStreamName(inputItem);
  };
  return (
    <StreamContents>
      <p>방송 제목</p>
      <form onChange={formSubmitHandler}>
        <input
          type="text"
          required
          ref={inputRef}
          placeholder="방송 제목을 입력해주세요"
        />
      </form>
    </StreamContents>
  );
}

export default MakeBasicInfo;
