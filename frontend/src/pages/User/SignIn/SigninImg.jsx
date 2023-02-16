import React, { useState } from 'react';
import { SvgIcon, Box } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import * as R from './SigninStyle';

export default function SigninImg({ userImgHandler }) {
  const [uploadUserImg, setUploadUserImg] = useState('');
  let renderingImage;
  if (uploadUserImg) {
    renderingImage = URL.createObjectURL(uploadUserImg);
  }

  return (
    <Box style={{ marginTop: '3vh' }}>
      <Box>
        <label htmlFor="recipe-cook-image">
          <div id="recipe-cook-image__area">
            <R.ImgBox>
              {renderingImage ? (
                <img src={renderingImage} alt="food" />
              ) : (
                <SvgIcon
                  sx={{ fontSize: 100 }}
                  component={AddPhotoAlternateIcon}
                />
              )}
            </R.ImgBox>
          </div>
        </label>
        <input
          onChange={event => {
            userImgHandler(event.target.files[0]);
            setUploadUserImg(event.target.files[0]);
          }}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="recipe-cook-image"
          hidden
          name="recipeImg"
        />
      </Box>
    </Box>
  );
}
