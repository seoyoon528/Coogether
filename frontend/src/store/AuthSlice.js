import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  authenticated: false,
  user_name: null,
  user_id: null,
};

export const AuthSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload.authenticated;
      changeState.user_name = action.payload.user_name;
      changeState.user_id = action.payload.user_id;
    },
    logout: (state, action) => {
      const changeState = state;
      changeState.authenticated = false;
      changeState.user_name = null;
      changeState.user_id = null;
    },
    register: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload;
      changeState.user_name = action.payload.user_name;
      changeState.user_id = action.payload.user_id;
    },
  },
});

export const { login, logout, register } = AuthSlice.actions;

export default AuthSlice.reducer;
