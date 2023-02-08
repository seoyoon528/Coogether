import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import * as SF from './StreamFinishModalStyle';
import imgInput from '../../../assets/icon/imgInput.svg';

function StreamFinishModal() {
  const [nowStep, setNowStep] = useState(0);
  const [imgURL, setImgURL] = useState('');
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

  return (
    <>
      {nowStep === 0 ? (
        <SF.FinishWrap>
          <SF.FinishTitle>완성된 요리 사진을 올려 주세요!</SF.FinishTitle>
          <SF.SubTitle>등록한 사진은 히스토리에 저장됩니다</SF.SubTitle>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
            style={{ display: 'none' }}
          />

          <SF.ImgBox>
            <img src={imgURL} alt="이미지 미리보기" />
          </SF.ImgBox>
          <SF.ImgUploadBtn onClick={onUploadImageButtonClick}>
            사진 촬영
          </SF.ImgUploadBtn>

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
          <SF.ImgBox />
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
            <SF.NexBeBten>제거</SF.NexBeBten>
          </SF.NextBeforWrap>
        </SF.FinishWrap>
      )}
    </>
  );
}

export default StreamFinishModal;
