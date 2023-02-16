import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SvgIcon } from '@mui/material';
import { Area, StreamContents } from './MakeImageStyle';

function MakeBasicInfo(props) {
  const { cookImage, onChange: setCookImage } = props;

  return (
    <>
      <StreamContents>
        <p>썸네일 등록</p>
        <div>필수</div>
      </StreamContents>
      <label htmlFor="thumbnail-cook-image">
        <Area>
          {cookImage !== '' ? (
            <img src={URL.createObjectURL(cookImage)} alt="사진" />
          ) : (
            <SvgIcon sx={{ fontSize: 100 }} component={AddPhotoAlternateIcon} />
          )}
        </Area>
      </label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        id="thumbnail-cook-image"
        onChange={event => {
          setCookImage(event.target.files[0]);
        }}
        hidden
      />
    </>
  );
}

export default MakeBasicInfo;
