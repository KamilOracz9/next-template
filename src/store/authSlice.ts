import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
}

const initialState: AuthState = { token: '' };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state) => {
      state.token = 'token';
    },
  }
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
