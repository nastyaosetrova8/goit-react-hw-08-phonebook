import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  };
  
  function handlePending(state) {
    state.isLoading = true;
    state.error = null;
  }
  
  function handleRejected(state, { payload }) {
    state.isLoading = false;
    state.error = payload;
  }

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder

    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false;
    state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logIn.fulfilled, (state, {payload}) => {
      state.isLoading = false;
    state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.isLoading = false;
    state.error = null;
      state.user = {name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.pending, (state) => {
      state.isLoading = true;
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
        state.isRefreshing = false;
    })
    .addMatcher(action=>action.type.endsWith('/pending'), handlePending)
    .addMatcher(action=>action.type.endsWith('/rejected'), handleRejected)
  });

  export const authReducer = authSlice.reducer;