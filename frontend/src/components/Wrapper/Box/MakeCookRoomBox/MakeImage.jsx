import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SvgIcon } from '@mui/material';
import { Area } from './MakeImageStyle';
import { StreamContents } from './MakeDetailInfoStyle';

function MakeBasicInfo(props) {
  const { cookImage, onChange: setCookImage } = props;

  return (
    <>
      <StreamContents>
        <p>썸네일 등록</p>
        <label htmlFor="thumbnail-cook-image">
          <Area>
            {cookImage !== '' ? (
              <img src={cookImage} alt="사진" />
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
          id="thumbnail-cook-image"
          onChange={event => {
            setCookImage(URL.createObjectURL(event.target.files[0]));
          }}
          hidden
        />
      </StreamContents>
    </>
  );
}

export default MakeBasicInfo;
