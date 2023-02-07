import React from 'react';
import { StreamContents } from './MakeDetailInfoStyle';

function MakeBasicInfo(props) {
  const { detailInputs, onChange: setDetailInputs } = props;
  return (
    <>
      <StreamContents>
        <p>공지 사항</p>
        <input
          type="text"
          required
          value={detailInputs}
          onChange={e => setDetailInputs(e.target.value)}
          placeholder="공지 사항을 입력해주세요"
        />
      </StreamContents>
    </>
  );
}

export default MakeBasicInfo;
