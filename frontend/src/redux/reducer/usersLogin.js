import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../auctions/userLogin";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    error: null,
    user: [],
  },
  reducers: {
    loginStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (bulider) => {
    bulider.addCase(loginApi.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(loginApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action?.payload;
      state.error = "";
    });
    bulider.addCase(loginApi.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
