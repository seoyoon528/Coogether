import { createSlice } from '@reduxjs/toolkit';
// 초기값 설정
const initialStateValue = {
  KOREAN: '한식',
  CHINESE: '중식',
  WESTERN: '양식',
  JAPANESE: '일식',
  DESSERT: '베이킹/디저트',
  ASIAN: '아시안',
  BUNSIK: '분식 ',
  ETC: '기타',
  NONE: '없음 ',
};

// slice 이름을 PreferCook으로 함
export const PreferCookSlice = createSlice({
  name: 'prefer',
  initialState: initialStateValue,
  reducers: {},
});

export default PreferCookSlice.reducer;
