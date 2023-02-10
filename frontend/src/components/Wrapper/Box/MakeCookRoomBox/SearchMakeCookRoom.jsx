import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Autocomplete, TextField } from '@mui/material';
import { StreamContents } from './SearchMakeCookRoomStyle';
// MUI

function SearchMakeCookRoom(props) {
  const { setSelectRecipe } = props;
  const [recipe, setRecipe] = useState([]);

  useEffect(async () => {
    try {
      const getRecipe = await axios({
        url: 'http://i8b206.p.ssafy.io:9000/api/recipe/list/total',
      });
      setRecipe(getRecipe.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <StreamContents>
        <p> 요리 이름</p>
        <div>필수</div>
      </StreamContents>
      <Autocomplete
        disablePortal
        id="recipe-register__autocomplete"
        noOptionsText="검색 결과가 없습니다"
        options={recipe}
        onChange={(event, newValue) => {
          setSelectRecipe(newValue);
        }}
        blurOnSelect
        getOptionLabel={option => {
          return option.recipeName || '';
        }}
        sx={{
          '& .MuiFormControl-root': {
            backgroundColor: 'white',
          },
          '& .MuiFormControl-root .MuiInputBase-root': {
            height: '5.6rem',
            padding: '1.6rem',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '0.5px solid #505050',
          },
          '& .MuiFormControl-root .MuiInputBase-root .MuiInputBase-input': {
            height: '100%',
            padding: 0,
            fontFamily: 'Pretendard Medium',
            fontSize: '1.6rem',
            '::placeholder': {
              color: '#505050',
              fontFamily: 'Pretendard Regular',
              opacity: '1',
            },
          },
          '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
            padding: '1.6rem',
            fontSize: '1.6rem',
            fontFamily: 'Pretendard Regular',
          },
          '& + .MuiAutocomplete-popper .MuiAutocomplete-noOptions': {
            fontSize: '1.6rem',
            padding: '1.6rem',
            fontFamily: 'Pretendard Regular',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#FEBD2F',
            },
          },
        }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.recipeId}>
              {option.recipeName}
            </li>
          );
        }}
        renderInput={params => (
          <TextField
            {...params}
            placeholder="레시피를 검색하세요"
            sx={{ border: 'none' }}
          />
        )}
      />
      {/* <input type="text" placeholder="요리 이름을 검색하세요." /> */}
    </>
  );
}
export default SearchMakeCookRoom;
