import React, { useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Background, H3, Button } from './MakeCookRoomStyle';
import MakeBasicInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeBasicInfo';
import MakeDetailInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeDetailInfo';

function MakeCoomRoom() {
  const [viewBasicInfo, setViewBasicInfo] = useState(true);
  return (
    <Background>
      <H3>요리방 만들기</H3>
      <Button onClick={() => setViewBasicInfo(true)}>기본정보</Button>
      <Button onClick={() => setViewBasicInfo(false)}>상세정보</Button>
      {viewBasicInfo ? <MakeBasicInfo /> : <MakeDetailInfo />}
    </Background>
  );
}

export default MakeCoomRoom;
