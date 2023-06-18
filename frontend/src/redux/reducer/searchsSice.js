import { createSlice } from "@reduxjs/toolkit";

import {  jobsearch } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  jobData: [],
  error: "",
};
const searchDataSlice = createSlice({
  name: "userData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(jobsearch.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(jobsearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobData = action?.payload;
      state.error = "";
    });
    bulider.addCase(jobsearch.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

// export const  = jobDataSlice.actions;
export default searchDataSlice.reducer;
