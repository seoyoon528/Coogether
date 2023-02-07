import React from 'react';
import { StreamContents } from './MakeDetailInfoStyle';

function SearchMakeCookRoom() {
  return (
    <>
      <StreamContents>
        <p> 요리 이름</p>
        <input type="text" placeholder="요리 이름을 검색하세요." />
      </StreamContents>
    </>
  );
}
export default SearchMakeCookRoom;
