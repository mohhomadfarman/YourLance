import { createSlice } from "@reduxjs/toolkit";

import { JobdataD } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  jobData: [],
  error: "",
};
const jobsearchfetch = createSlice({
  name: "userData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(JobdataD.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(JobdataD.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobData = action?.payload;
      state.error = "";
    });
    bulider.addCase(JobdataD.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default jobsearchfetch.reducer;
