import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  authenticated: false,
  token: null,
};

export const AuthSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.result;
      changeState.token = action.token;
    },
    logout: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload;
    },
    register: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.payload;
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
