import React, { useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Background, H3, Button } from './MakeCookRoomStyle';
import MakeBasicInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeBasicInfo';
import MakeDetailInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeDetailInfo';
import StreamModal from '../../components/Modal/StreamModal/StreamModal';

function MakeCoomRoom() {
  const [viewBasicInfo, setViewBasicInfo] = useState(true);
  const [inputs, setInputs] = useState({
    streamName: '',
    startName: '',
    cookName: '',
  });
  const [detailInputs, setDetailInputs] = useState({
    cookNotice: '',
    thumnailImage: '',
  });

  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const roomSubmitHandler = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Background>
      <H3>요리방 만들기</H3>
      <Button onClick={() => setViewBasicInfo(true)}>기본정보</Button>
      <Button onClick={() => setViewBasicInfo(false)}>상세정보</Button>
      {viewBasicInfo ? (
        <MakeBasicInfo inputs={inputs} onChange={setInputs} />
      ) : (
        <MakeDetailInfo
          detailInputs={detailInputs}
          onChange={setDetailInputs}
        />
      )}
      <button onClick={onClickButton}>생성 완료</button>
      {isOpen && (
        <StreamModal
          open={isOpen}
          roomSubmitHandler={roomSubmitHandler}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Background>
  );
}

export default MakeCoomRoom;
