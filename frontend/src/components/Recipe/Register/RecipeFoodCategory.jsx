// MUI
import { Box, Select, MenuItem, styled, InputBase } from '@mui/material';

const CategoryInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'white',
    border: '0.5px solid #505050',
    fontSize: '1.6rem',
    padding: '1.6rem',
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Pretendard Medium',
  },
}));

export default function RecipeFoodCategory(props) {
  const { selectedCategory, onChange: setSelectedCategory } = props;
  const foodCategories = [
    { value: 'KOREAN', label: '한식' },
    { value: 'CHINESE', label: '중식' },
    { value: 'WESTERN', label: '양식' },
    { value: 'JAPANESE', label: '일식' },
    { value: 'DESSERT', label: '베이킹/디저트' },
    { value: 'ASIAN', label: '아시안' },
    { value: 'BUNSIK', label: '분식' },
    { value: 'ETC', label: '기타' },
    { value: 'NONE', label: '없음' },
  ];

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label htmlFor="recipe-food-category">요리 분류</label>
      </Box>
      <Box gridColumn="span 9">
        <Select
          fullWidth
          value={selectedCategory}
          onChange={event => {
            setSelectedCategory(event.target.value);
          }}
          id="recipe-food-category"
          input={<CategoryInput />}
        >
          <MenuItem
            disabled
            value="no-select"
            sx={{
              display: 'none',
            }}
          >
            요리 분류를 선택해주세요
          </MenuItem>
          {foodCategories.map(category => {
            return (
              <MenuItem
                key={category.label}
                value={category.value}
                sx={{
                  padding: '1.6rem',
                  fontFamily: 'Pretendard Regular',
                  fontSize: '1.6rem',
                  opacity: 1,
                  color: 'black',
                }}
              >
                {category.label}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
}
