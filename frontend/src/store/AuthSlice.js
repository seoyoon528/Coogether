import { createSlice } from '@reduxjs/toolkit';
// 초기값 설정
// authenticated : 로그인 여부
// user_name, user_id : 유저 정보
const initialStateValue = {
  authenticated: false,
  user_name: null,
  user_id: null,
  accessToken: null,
};
// slice 이름을 user로 함
// login, logout, register로 구분하여 각각 해당하는 값을 action에서 전달
export const AuthSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload.authenticated;
      changeState.user_name = action.payload.user_name;
      changeState.user_id = action.payload.user_id;
      changeState.accessToken = action.payload.accessToken;
    },
    logout: (state, action) => {
      const changeState = state;
      changeState.authenticated = false;
      changeState.user_name = null;
      changeState.user_id = null;
      changeState.accessToken = null;
    },
    register: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload;
      changeState.user_name = action.payload.user_name;
      changeState.user_id = action.payload.user_id;
      changeState.accessToken = action.payload.accessToken;
    },
  },
});

export const { login, logout, register } = AuthSlice.actions;

export default AuthSlice.reducer;
