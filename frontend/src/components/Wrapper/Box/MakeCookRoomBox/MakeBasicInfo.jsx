import React from 'react';
import { StreamContents } from './MakeBasicInfoStyle';

function MakeBasicInfo(props) {
  const { streamName, onChange: setStreamName } = props;
  return (
    <StreamContents>
      <p>방송 제목</p>
      <input
        type="text"
        required
        value={streamName}
        onChange={e => setStreamName(e.target.value)}
        placeholder="방송 제목을 입력해주세요"
      />
    </StreamContents>
  );
}

export default MakeBasicInfo;
