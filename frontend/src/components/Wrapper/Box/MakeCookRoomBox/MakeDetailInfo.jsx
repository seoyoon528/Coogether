import React, { useRef } from 'react';

// Style
import { StreamContents, StreamContentsInput } from './MakeDetailInfoStyle';

function MakeBasicInfo(props) {
  const { setAnnounce } = props;

  const inputRef = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();

    const inputItem = inputRef.current.value;
    if (inputItem.trim().length === 0) {
      return;
    }
    setAnnounce(inputItem);
  };

  return (
    <>
      <StreamContents>
        <p>공지 사항</p>
        <div>필수</div>
      </StreamContents>

      <form onChange={formSubmitHandler}>
        <StreamContentsInput
          type="text"
          required
          ref={inputRef}
          placeholder="공지 사항을 입력해주세요"
        />
      </form>
    </>
  );
}

export default MakeBasicInfo;
