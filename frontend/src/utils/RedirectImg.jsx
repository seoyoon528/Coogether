import React, { useState } from 'react';

import { SvgIcon, Box } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function RedirectImg({ userImgHandler }) {
  const [uploadUserImg, setUploadUserImg] = useState('');
  let renderingImage;
  if (uploadUserImg) {
    renderingImage = URL.createObjectURL(uploadUserImg);
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 9">
        <label htmlFor="recipe-cook-image">
          <div id="recipe-cook-image__area">
            {renderingImage ? (
              <img src={renderingImage} alt="food" />
            ) : (
              <SvgIcon
                sx={{ fontSize: 100 }}
                component={AddPhotoAlternateIcon}
              />
            )}
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
