import React from 'react';

import { SvgIcon, Box } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function RecipeCookImage(props) {
  const { cookImage, onChange: setCookImage } = props;

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-cook-image">사진 등록</label>
      </Box>
      <Box gridColumn="span 9">
        <label htmlFor="recipe-cook-image">
          <div id="recipe-cook-image__area">
            {cookImage !== '' ? (
              <img src={cookImage} alt="food" />
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
            setCookImage(URL.createObjectURL(event.target.files[0]));
          }}
          type="file"
          accept="image/*"
          id="recipe-cook-image"
          hidden
        />
      </Box>
    </Box>
  );
}
