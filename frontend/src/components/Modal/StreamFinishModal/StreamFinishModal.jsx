import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import imgInput from '../../../assets/icon/imgInput.svg';
import * as SF from './StreamFinishModalStyle';
import RedirectImg from '../../../utils/RedirectImg';

function StreamFinishModal({ onChangeShow }) {
  const userInfo = useSelector(state => state.user);
  const history = useHistory();
  const [nowStep, setNowStep] = useState(0);
  const [imgURL, setImgURL] = useState('');
  const [userImg, setUserImg] = useState('');
  const inputRef = useRef(null);
  // 이미지 업로드
  const onUploadImage = useCallback(e => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgURL(reader.result);
    };

    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    /*
    axios({
      baseURL: 'API주소',
      url: '/images/:username/thumbnail',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      }); */
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  // 전체화면 설정
  function openFullScreenMode() {
    if (document.documentElement.requestFullscreen)
      document.documentElement.requestFullscreen();
    else if (document.documentElement.webkitRequestFullscreen)
      // Chrome, Safari (webkit)
      document.documentElement.webkitRequestFullscreen();
    else if (document.documentElement.mozRequestFullScreen)
      // Firefox
      document.documentElement.mozRequestFullScreen();
    else if (document.documentElement.msRequestFullscreen)
      // IE or Edge
      document.documentElement.msRequestFullscreen();
  }

  // 전체화면 해제
  function closeFullScreenMode() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen)
      // Chrome, Safari (webkit)
      document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen)
      // Firefox
      document.mozCancelFullScreen();
    else if (document.msExitFullscreen)
      // IE or Edge
      document.msExitFullscreen();
  }

  const userImgHandler = event => {
    setUserImg(event);
  };

  // 이미지와 재료 삭제 동시에 업로드

  const submitRegister = async () => {
    const userFormPayload = {
      id: userInfo.data.user.userId, // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
      name: userInfo.data.user.userName, // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
      email: userInfo.data.user.userEmail, // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
      nickname: nickName,
      profileImg: '',
      userIntroduce: `안녕하세요 ${userInfo.data.user.userName}입니다.`,
      userCookCategory: prefer[1],
    };
    console.log(userFormPayload);
    // 이석훈 - 로컬 작업으로만 진행하기 때문에 merge때 배포 주소로 바꿀것
    // formdata에 전송할 데이터 담기
    const formData = new FormData();
    formData.append(
      'requestDto',
      new Blob([JSON.stringify(userFormPayload)], { type: 'application/json' })
    );
    // 파일
    formData.append('file', userImg);

    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/user/signup`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };
    try {
      const submitUserForm = await axios(requestInfo);
      console.log(submitUserForm);

      history.push('/main');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {nowStep === 0 ? (
        <SF.FinishWrap>
          <SF.FinishTitle>완성된 요리 사진을 올려 주세요!</SF.FinishTitle>
          <SF.SubTitle>등록한 사진은 히스토리에 저장됩니다</SF.SubTitle>
          <RedirectImg userImgHandler={userImgHandler} />

          {/* <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
            style={{ display: 'none' }}
          />

          <SF.ImgBox>
            {!imgURL ? (
              <img
                src={imgInput}
                alt="이미지 넣기"
                style={{ width: '20%', height: '20%' }}
              />
            ) : (
              <img src={imgURL} alt="이미지 미리보기" />
            )}
          </SF.ImgBox> */}

          <button
            onClick={submitRegister}
            style={{ background: '#FFDB8D', borderRadius: '4px' }}
          >
            사진 촬영
          </button>
          {/* <SF.ImgUploadBtn onClick={onUploadImageButtonClick}>
            사진 촬영
          </SF.ImgUploadBtn> */}

          <SF.NextBeforWrap>
            <SF.NexBeBten style={{ opacity: '0', cursor: 'default' }}>
              이전
            </SF.NexBeBten>
            <SF.NexBeBten
              onClick={() => {
                setNowStep(1);
              }}
            >
              다음
            </SF.NexBeBten>
          </SF.NextBeforWrap>
        </SF.FinishWrap>
      ) : (
        <SF.FinishWrap>
          <SF.FinishTitle>요리는 즐거우셨나요?</SF.FinishTitle>
          <SF.SubTitle>
            이번 요리로 소진한 재료는 냉장고에서 제거하세요.
          </SF.SubTitle>
          <SF.CheckBox>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="당근" />
            </FormGroup>
          </SF.CheckBox>
          <SF.ImgUploadBtn style={{ opacity: '0', cursor: 'default' }}>
            사진 촬영
          </SF.ImgUploadBtn>
          <SF.NextBeforWrap>
            <SF.NexBeBten
              style={{ background: '#DEE2E6' }}
              onClick={() => {
                setNowStep(0);
              }}
            >
              이전
            </SF.NexBeBten>
            <SF.NexBeBten
              onClick={() => {
                onChangeShow();
                closeFullScreenMode();
                history.push('/Main');
              }}
            >
              제거
            </SF.NexBeBten>
          </SF.NextBeforWrap>
        </SF.FinishWrap>
      )}
    </>
  );
}

export default StreamFinishModal;
