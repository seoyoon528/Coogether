import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  authenticated: false,
  token: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      const changeState = state;
      changeState.authenticated = action.result;
      changeState.token = action.token;
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
