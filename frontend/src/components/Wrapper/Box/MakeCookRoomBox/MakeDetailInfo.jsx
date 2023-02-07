import React, { useState, useRef } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SvgIcon } from '@mui/material';
import { StreamContents, Input, Area } from './MakeDetailInfoStyle';

function MakeBasicInfo() {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  // const saveFileImage = e => {
  //   setImgFile(URL.createObjectURL(e.target.files[0]));
  // };

  return (
    <>
      <StreamContents>
        <p>공지 사항</p>
        <Input type="text" placeholder="공지 사항을 입력해주세요" />
        <p>미리 보기</p>
        <label htmlFor="recipe-cook-image">
          <Area>
            {imgFile !== '' ? (
              <img src={imgFile} alt="사진" />
            ) : (
              <SvgIcon
                sx={{ fontSize: 100 }}
                component={AddPhotoAlternateIcon}
              />
            )}
          </Area>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={saveImgFile}
          ref={imgRef}
          hidden
        />
      </StreamContents>
    </>
  );
}

export default MakeBasicInfo;
