import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Background, H3, Button } from './MakeCookRoomStyle';
import MakeBasicInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeBasicInfo';
import MakeDetailInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeDetailInfo';
import StreamModal from '../../components/Modal/StreamModal/StreamModal';
import MakeImage from '../../components/Wrapper/Box/MakeCookRoomBox/MakeImage';
import MakeTimeInput from '../../components/Wrapper/Box/MakeCookRoomBox/MakeTimeInput';
import SearchMakeCookRoom from '../../components/Wrapper/Box/MakeCookRoomBox/SearchMakeCookRoom';

function MakeCoomRoom() {
  // 방송 제목
  const [streamName, setStreamName] = useState('');
  // 요리 시간
  const [streamTime, setStreamTime] = useState('');
  // 요리 사진
  const [cookImage, setCookImage] = useState('');
  // 공지사항
  const [detailInputs, setDetailInputs] = useState('');

  // 모달 열기
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const roomSubmitHandler = event => {
    event.preventDefault();
    console.log(streamName, cookImage, detailInputs);
  };

  return (
    <Background>
      <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={1}>
        <Box gridColumn="span 6" />
        <Box gridColumn="span 4">
          <H3>요리방 만들기</H3>
          <MakeBasicInfo streamName={streamName} onChange={setStreamName} />
          <MakeTimeInput streamTime={streamTime} onChange={setStreamTime} />
          <SearchMakeCookRoom />
          <MakeDetailInfo
            detailInputs={detailInputs}
            onChange={setDetailInputs}
          />
          <MakeImage cookImage={cookImage} onChange={setCookImage} />
          <Button onClick={onClickButton}>생성 완료</Button>
          {isOpen && (
            <StreamModal
              open={isOpen}
              onClick={roomSubmitHandler}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </Box>
        <Box gridColumn="span 6" />
      </Box>
    </Background>
  );
}

export default MakeCoomRoom;
