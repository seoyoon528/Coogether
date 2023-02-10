import React, { useEffect, useState } from 'react';
import axios from 'axios';
// userseq를 통해 파악할것
function CheckUserNum({ thisRoom, userNum }) {
  const [nowPerson, setNowPerson] = useState(0);
  async function checkNum() {
    const response = await axios.get(
      `http://i8b206.p.ssafy.io:9000/room/${thisRoom}`
    );
    const a = response;
    if (response.data.userJoinLists.length > userNum) {
      const delNum = await axios.delete(
        `http://i8b206.p.ssafy.io:9000/room/${thisRoom}/${response.data.userJoinLists.length}`
      );
      const res = delNum;
    } else if (response.data.userJoinLists.length < userNum) {
      const addNum = await axios.get(
        `http://i8b206.p.ssafy.io:9000/room/${thisRoom}/${userNum}`
      );
      const res = addNum;
    }
  }

  useEffect(() => {
    checkNum(userNum);
  }, [userNum]);

  return <div style={{ display: 'none' }}>checkUserNum</div>;
}

export default CheckUserNum;
