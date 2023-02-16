import React, { useRef } from 'react';

// Style
import { StreamContents, StreamContentsInput } from './MakeBasicInfoStyle';

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
    <>
      <StreamContents>
        <p>방송 제목</p>
        <div>필수</div>
      </StreamContents>
      <form onChange={formSubmitHandler}>
        <StreamContentsInput
          type="text"
          required
          ref={inputRef}
          placeholder="방송 제목을 입력해주세요"
        />
      </form>
    </>
  );
}

export default MakeBasicInfo;
