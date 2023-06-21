import { createSlice } from "@reduxjs/toolkit";

import {  pdfofjob } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  pdfdat: [],
  error: "",
};
const jobpdfslice = createSlice({
  name: "userData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(pdfofjob.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(pdfofjob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pdfdat = action?.payload;
      state.error = "";
    });
    bulider.addCase(pdfofjob.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default jobpdfslice.reducer;
