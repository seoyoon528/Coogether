import React from 'react';

// MUI
import { Box, TextField, MenuItem } from '@mui/material';

export default function RecipeFoodCategory(props) {
  const foodCategories = [
    { label: 'no-select', name: '요리분류를 선택해주세요' },
    { label: 'korean', name: '한식' },
    { label: 'chinese', name: '중식' },
    { label: 'western', name: '양식' },
    { label: 'japanese', name: '일식' },
    { label: 'dessert', name: '베이킹/디저트' },
    { label: 'asian', name: '아시안' },
    { label: 'bunsik', name: '분식' },
    { label: 'etc', name: '기타' },
    { label: 'none', name: '없음' },
  ];

  const { cookCategoryRef } = props;

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-cook-category">요리 분류</label>
      </Box>
      <Box gridColumn="span 9">
        <TextField
          select
          fullWidth
          defaultValue="no-select"
          sx={{ backgroundColor: 'white' }}
        >
          {foodCategories.map(category => {
            return (
              <MenuItem
                key={category.label}
                value={category.label}
                disabled={category.label === 'no-select'}
              >
                {category.name}
              </MenuItem>
            );
          })}
        </TextField>
      </Box>
    </Box>
  );
}
