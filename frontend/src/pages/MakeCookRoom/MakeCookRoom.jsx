import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';

import { Background, H3, Button } from './MakeCookRoomStyle';

import MakeBasicInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeBasicInfo';
import MakeDetailInfo from '../../components/Wrapper/Box/MakeCookRoomBox/MakeDetailInfo';
import StreamModal from '../../components/Modal/StreamModal/StreamModal';
import MakeImage from '../../components/Wrapper/Box/MakeCookRoomBox/MakeImage';
import MakeTimeInput from '../../components/Wrapper/Box/MakeCookRoomBox/MakeTimeInput';
import SearchMakeCookRoom from '../../components/Wrapper/Box/MakeCookRoomBox/SearchMakeCookRoom';
import NextBtn from '../../components/Btn/NextBtn/NextBtn';

function MakeCoomRoom() {
  const userSeq = useSelector(state => state.user.userSeq);
  const accessToken = useSelector(state => state.user.accessToken);
  const history = useHistory();
  // 방송 제목
  const [streamName, setStreamName] = useState('');
  // 요리 시간
  const [streamTime, setStreamTime] = useState('');
  // 공지사항
  const [announce, setAnnounce] = useState('');
  // 요리 사진
  const [cookImage, setCookImage] = useState('');
  // 레시피
  const [selectRecipe, setSelectRecipe] = useState('');

  // 모달 열기
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  // console.log(new Date());
  const roomSubmitHandler = async () => {
    const sendingData = {
      cookingRoomName: streamName,
      cookingRoomNotice: announce,
      cookingRoomStartTime: streamTime,
      recipeName: selectRecipe.recipeName,
    };
    const formData = new FormData();
    formData.append(
      'cookingRoomRequest',
      new Blob([JSON.stringify(sendingData)], { type: 'application/json' })
    );
    formData.append('file', cookImage);
    // console.log(cookImage.Js);
    // console.log(streamName, streamTime, cookImage, announce, selectRecipe);
    try {
      const postData = await axios({
        url: `https://i8b206.p.ssafy.io:9000/api/room/create/${userSeq}/${selectRecipe.recipeId}`,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      });
      // console.log(postData.data);
      history.push(`/Room/${postData.data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={1}>
        <Box gridColumn="span 6" />
        <Box gridColumn="span 4">
          <H3>다른 사람들과 요리를 시작해 보세요</H3>
          <MakeBasicInfo setStreamName={setStreamName} />
          <MakeTimeInput setStreamTime={setStreamTime} />
          <SearchMakeCookRoom setSelectRecipe={setSelectRecipe} />
          <MakeDetailInfo setAnnounce={setAnnounce} />
          <MakeImage cookImage={cookImage} onChange={setCookImage} />

          <NextBtn
            size="large"
            color="yellow"
            name="만들기"
            onClick={onClickButton}
          />
          {/* <Button onClick={onClickButton}>생성 완료</Button> */}
          {isOpen && (
            <StreamModal
              open={isOpen}
              roomSubmitHandler={roomSubmitHandler}
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
