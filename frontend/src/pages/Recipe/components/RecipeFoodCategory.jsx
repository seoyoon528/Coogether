import React, { useState } from 'react';

// MUI
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
} from '@mui/material';

export default function RecipeFoodCategory(props) {
  console.log(1);
  const foodCategories = [
    { value: 'korean', label: '한식' },
    { value: 'chinese', label: '중식' },
    { value: 'western', label: '양식' },
    { value: 'japanese', label: '일식' },
    { value: 'dessert', label: '베이킹/디저트' },
    { value: 'asian', label: '아시안' },
    { value: 'bunsik', label: '분식' },
    { value: 'etc', label: '기타' },
    { value: 'none', label: '없음' },
  ];

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-food-category">요리 분류</label>
      </Box>
      <Box gridColumn="span 9">
        <Autocomplete
          id="recipe-food-category-autocomplete"
          disablePortal
          ListboxProps
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '4',
              padding: '1.6rem',
              backgroundColor: 'white',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              border: '0.5px solid #505050',
            },
            '& .MuiInputBase-root': {
              height: '5.6rem',
            },
          }}
          options={foodCategories.map(option => option.label)}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="요리 분류를 선택해주세요"
              sx={{}}
            />
          )}
        />

        {/* <div
          className="recipe-food-category__select"
          onClick={openOptionHandler}
          aria-hidden="true"
        >
          <p>{selectedCategory || '요리 분류를 선택해주세요'}</p>
        </div>
        <ul
          className={`recipe-food-category__option ${
            isOptionOpened ? 'active' : ''
          }`}
        >
          {foodCategories.map(category => {
            return (
              <li
                key={category.value}
                onClick={() => {
                  selectOptionHandler(category.label);
                  closeOptionHandler();
                }}
                aria-hidden="true"
              >
                {category.label}
              </li>
            );
          })}
        </ul> */}
      </Box>
    </Box>
  );
}
