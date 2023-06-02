import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    // Initial state of the register feature
    isLoading: false,
    error: null,
    // Add any other state properties you need
  },
  reducers: {
    registerStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
